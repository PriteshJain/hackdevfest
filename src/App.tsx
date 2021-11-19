import React, { useState } from 'react'

import {  Flex } from '@chakra-ui/layout'

import { getQuestions } from './api/api'

import config from './config/quiz'

import { Quiz } from './types/quiz'

import Header from './components/Ui/Header'
import QuestionCard from './components/QuestionCard'
import StartPanel from './components/StartPanel'

import './App.css'
import GameOverPanel from './components/GameOverPanel'

const initialState = {
  questions: [],
  answers: [],
  totalScore: 0,
  isGameOver: false,
  isLeft: true,
  currentNumberQuestion: 0,
}

function App() {
  const [loading, setLoading] = useState(false)
  const [configQuiz, setConfigQuiz] = useState<Quiz>(initialState)

  const { questions, answers, totalScore, isGameOver, isLeft, currentNumberQuestion } =
    configQuiz


  const leftGame = () => setConfigQuiz(initialState)

  const startGame = () => {
    setLoading(true)
    getQuestions(config.totalQuestions)
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
    else
      setConfigQuiz((configQuiz) => ({
        ...configQuiz,
        currentNumberQuestion: nextQuestion,
      }))
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGameOver) {
      const userAnswer = e.currentTarget.value

      const isCorrect =
        questions[currentNumberQuestion].correct_answer === userAnswer

      if (isCorrect)
        setConfigQuiz((configQuiz) => ({
          ...configQuiz,
          totalScore: configQuiz.totalScore + 1,
        }))

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
      alignSelf='center'
      justifySelf='center'
      width='100%'
    >
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='0.8rem'
      >
        <Header content='Quiz React App' />
      </Flex>
      { isLeft && <StartPanel startGame={ startGame} /> }
      { isGameOver && <GameOverPanel score={ totalScore } nextQuiz={ leftGame }/> }
      { loading && <p>Loading...</p> }
      { !isLeft && !isGameOver && (
        <QuestionCard
          question={ questions[currentNumberQuestion]?.question }
          alternatives={ questions[currentNumberQuestion]?.listAlternatives }
          checkAnswer={ checkAnswer }
          leftGame={ leftGame }
          nextQuestion={ nextQuestion }
          userAnswer={ answers ? answers[currentNumberQuestion] : undefined }
          currentNumberQuestion={ currentNumberQuestion }
        />
      )}
    </Flex>
  )
}

export default App
