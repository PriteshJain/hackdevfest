import { Divider } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

import config from '../../../config/quiz'

type Props = {
  title: string;
  currentNumberQuestion: number;
}

const Question = ({ title, currentNumberQuestion }: Props) => {
  return (
    <>
      <Text color='white' fontWeight='bold' fontSize='3xl'>
        Question: { currentNumberQuestion + 1 } / { config.totalQuestions }
      </Text>
      <Divider marginTop='2' marginBottom='4'/>
      <Text color='white' fontWeight='bold' dangerouslySetInnerHTML={{ __html: title }}></Text>
    </>
  )
}

export default Question
