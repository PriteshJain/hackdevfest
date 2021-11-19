import { Flex, Heading, Spacer, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"

import config from "../../config/quiz"
import { getMessageByScore } from "../../helpers/getMessageByScore"
import { DownloadIcon } from "@chakra-ui/icons"

type Props = {
  score: number
  nextQuiz: VoidFunction
}

const GameOverPanel = ({ score, nextQuiz }: Props) => {

  const messageByScore = getMessageByScore(score);

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Image
        boxSize="150px"
        objectFit="cover"
        src={ messageByScore.image }
        alt={ messageByScore.message }/>
      <Heading as="h1" size="xl" mt={6} mb={6} color='white' fontWeight='bold'>
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
            leftIcon={<DownloadIcon />}
            backgroundColor="gray.200" 
            mr={20}>
            Download Results
          </Button>
          <Spacer />
          <Button
            backgroundColor="cyan.400"
            color="white"
            onClick={ nextQuiz }>
            Take New Quiz
          </Button>
        </Flex>
    </Flex>
  )
}

export default GameOverPanel
