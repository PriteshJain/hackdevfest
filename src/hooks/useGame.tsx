import React, { useState,useContext } from 'react'

import useSound from './useSound'

import { PreferencesContext } from 'context/PreferencesContext'

import { getQuestions } from 'api/api'
import { Quiz } from 'types/quiz'

import correctSound from 'assets/sounds/correct.mp3'
import incorrectSound from 'assets/sounds/incorrect.mp3'

import config from 'config/quiz'

const useGame = (initialState: Quiz) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [configQuiz, setConfigQuiz] = useState(initialState)
  const [isButtonNextDisabled, setIsButtonNextDisabled ] = useState<boolean>(true)

  const [playCorrect] = useSound(correctSound)
  const [playIncorrect] = useSound(incorrectSound)

  const { preferences, setPreferences } = useContext(PreferencesContext)

  const { questions, isGameOver, currentNumberQuestion } = configQuiz

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
      const isCorrect = questions[currentNumberQuestion].correct_answer === userAnswer

      if (isCorrect){
        setConfigQuiz((configQuiz) => ({
          ...configQuiz,
          totalScore: configQuiz.totalScore + 1,
        }))
        playCorrect()
      }else {
        playIncorrect()
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

  return {
    loading,
    configQuiz,
    isButtonNextDisabled,
    leftGame,
    startGame,
    nextQuestion,
    checkAnswer
  }
}

export default useGame