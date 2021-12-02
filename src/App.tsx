import React, { useState,useContext } from 'react'

import { Flex } from '@chakra-ui/layout'

import useSound from './hooks/useSound';

import { getQuestions } from './api/api'

import config from './config/quiz'

import { Quiz } from './types/quiz'

import { PreferencesContext } from './context/PreferencesContext'

import Header from './components/Ui/Header'
import QuestionCard from './components/QuestionCard'
import StartPanel from './components/StartPanel'
import GameOverPanel from './components/GameOverPanel'

import correctSound from './assets/sounds/correct.mp3'
import incorrectSound from './assets/sounds/incorrect.mp3'

import './App.css'

const initialState = {
  questions: [],
  answers: [],
  totalScore: 0,
  isGameOver: false,
  isLeft: true,
  currentNumberQuestion: 0,
}

const App = () => {

  const [playCorrect] = useSound(correctSound)
  const [playIncorrect] = useSound(incorrectSound)
  
  const { preferences, setPreferences } = useContext(PreferencesContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [configQuiz, setConfigQuiz] = useState<Quiz>(initialState)
  const [isButtonNextDisabled, setIsButtonNextDisabled ] = useState<boolean>(true)

  const { questions, answers, totalScore, isGameOver, isLeft, currentNumberQuestion } = configQuiz

  const leftGame = () => {
    setPreferences(config.preferences)
    setConfigQuiz(initialState)
    setIsButtonNextDisabled(true)
  }

  const startGame = () => {
    setLoading(true)
    getQuestions(config.totalQuestions, preferences.idCategory, preferences.difficulty)
      .then((questions) => {
        setConfigQuiz((configQuiz) => ({
          ...configQuiz,
          questions,
          isLeft: false
        }))
        setLoading(false)
    })
  }

  const nextQuestion = () => {
    const nextQuestion = currentNumberQuestion + 1;

    if (nextQuestion === config.totalQuestions)
      setConfigQuiz((configQuiz) => ({ ...configQuiz, isGameOver: true }));
    else{
      setConfigQuiz((configQuiz) => ({ ...configQuiz, currentNumberQuestion: nextQuestion }))

      setIsButtonNextDisabled(true)

    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGameOver) {

      setIsButtonNextDisabled(false)

      const userAnswer = e.currentTarget.value

      const isCorrect =
        questions[currentNumberQuestion].correct_answer === userAnswer

      if (isCorrect){

        setConfigQuiz((configQuiz) => ({
          ...configQuiz,
          totalScore: configQuiz.totalScore + 1,
        }))

        playCorrect();
        
      }else {
        playIncorrect();
      }

      const answer = {
        question: questions[currentNumberQuestion].question,
        userAnswer,
        isCorrect,
        correct_answer: questions[currentNumberQuestion].correct_answer,
      }

      setConfigQuiz((configQuiz) => ({
        ...configQuiz,
        answers: configQuiz.answers.concat(answer)
      }))
    }
  }

  return (
    <Flex
      direction='column'
      p={10}>
      <Header content='Trivia Game' />
      { isLeft && <StartPanel startGame={ startGame} isLoading={ loading }/> }
      { isGameOver && <GameOverPanel score={ totalScore } nextQuiz={ leftGame }/> }
      { !isLeft && !isGameOver && (
        <QuestionCard
          question={ questions[currentNumberQuestion]?.question }
          alternatives={ questions[currentNumberQuestion]?.listAlternatives }
          checkAnswer={ checkAnswer }
          leftGame={ leftGame }
          nextQuestion={ nextQuestion }
          userAnswer={ answers ? answers[currentNumberQuestion] : undefined }
          currentNumberQuestion={ currentNumberQuestion }
          isDisabled={ isButtonNextDisabled }
        />
      )}
    </Flex>
  )
}

export default App
