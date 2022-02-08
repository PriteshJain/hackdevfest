import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

import config from '../../config/quiz'
import { getMessageByScore } from '../../helpers/getMessageByScore'

type Props = {
  score: number
  nextQuiz: VoidFunction
}

const GameOverPanel = ({ score, nextQuiz }: Props) => {

  const messageByScore = getMessageByScore(score);

  return (
    <Flex flexDirection='column' alignItems='center' mt={10}>
      <Image
        boxSize='150px'
        objectFit='cover'
        src={ messageByScore.image }
        alt={ messageByScore.message }/>
      <Heading as='h1' size='xl' mt={6} mb={6} color='white' fontWeight='bold'>
        { messageByScore.message }
      </Heading>
      <Text color='white' fontWeight='bold' letterSpacing='3px'>
        YOUR SCORE
      </Text>
      <Text color='white' fontWeight='bold' letterSpacing='3px' fontSize='50px'>
        { score } / { config.totalQuestions }
      </Text>
      <Flex mt={10}>
        <Button
          colorScheme='cyan'
          color='white'
          onClick={ nextQuiz }>
          Take New Quiz
        </Button>
      </Flex>
    </Flex>
  )
}

export default GameOverPanel
