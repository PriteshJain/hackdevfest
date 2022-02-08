import { useContext } from 'react'

import { Divider } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

import config from '../../../config/quiz'

import { PreferencesContext } from '../../../context/PreferencesContext'

type Props = {
  title: string;
  currentNumberQuestion: number;
}

const Question = ({ title, currentNumberQuestion }: Props) => {

  const { preferences } = useContext(PreferencesContext)

  return (
    <>
      <Text color='white' fontWeight='bold' fontSize='3xl'>
        Question: { currentNumberQuestion + 1 } / { config.totalQuestions }
      </Text>
      <Text color='#12c69d' fontWeight='bold' fontSize='sm' casing='uppercase'>
        { preferences.nameCategory }
      </Text>
      <Divider marginTop='2' marginBottom='4'/>
      <Text color='white' fontWeight='bold' dangerouslySetInnerHTML={{ __html: title }}></Text>
    </>
  )
}

export default Question
