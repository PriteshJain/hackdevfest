import { Container } from '@chakra-ui/react'
import { Box, Stack, Flex, Spacer } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { Answer } from '../../types/quiz'

import Alternative from './Alternative'
import Question from './Question'

type Props = {
  question: string;
  alternatives: string[] | undefined
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void
  leftGame: VoidFunction
  nextQuestion: VoidFunction
  userAnswer: Answer | undefined
  currentNumberQuestion: number
  isDisabled: boolean
}

const QuestionCard = ({
  question,
  alternatives,
  checkAnswer,
  leftGame,
  nextQuestion,
  userAnswer,
  currentNumberQuestion,
  isDisabled
}: Props) => {

  return (
    <Stack as={Container}>
      <Box mb='6'>
        <Question
          title={question}
          currentNumberQuestion={currentNumberQuestion}
        />
      </Box>
      <Box mb='4'>
        {
          <Stack spacing='2'>
            {alternatives?.map((alternative, index) => (
              <Alternative
                key={index}
                title={alternative}
                checkAnswer={checkAnswer}
                isCorrect={userAnswer?.correct_answer === alternative}
                isUserClicked={userAnswer?.userAnswer === alternative}
                isDisabled={Boolean(userAnswer)}
              />
            ))}
          </Stack>
        }
      </Box>
      <Flex>
        <Button
          backgroundColor='gray.200'
          leftIcon={<ArrowBackIcon />}
          onClick={leftGame}>
          Quit Quiz
        </Button>
        <Spacer />
        <Button
          colorScheme='cyan'
          rightIcon={<ArrowForwardIcon />}
          onClick={nextQuestion}
          color='white'
          isDisabled={ isDisabled }>
          Next
        </Button>
      </Flex>
    </Stack>
  );
};

export default QuestionCard
