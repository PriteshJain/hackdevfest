import { Flex } from '@chakra-ui/layout'

import useGame from './hooks/useGame'

import Header from './components/Ui/Header'
import QuestionCard from './components/QuestionCard'
import StartPanel from './components/StartPanel'
import GameOverPanel from './components/GameOverPanel'

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

  const { loading,configQuiz,isButtonNextDisabled,startGame,leftGame,checkAnswer,nextQuestion } = useGame(initialState)

  const { questions, answers, totalScore, isGameOver, isLeft, currentNumberQuestion } = configQuiz

  return (
    <Flex
      direction='column'
      p={10}>
      <Header content='Triviamind' />
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
