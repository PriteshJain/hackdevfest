import { Box, Text } from '@chakra-ui/layout'

const InstructionsPanel = () => {
  return (
    <Box>
      <Text 
        fontWeight='bold'
        color='white' 
        fontSize='2xl' 
        mb={5}>Instructions</Text>
      <Text color='white' fontSize='md' mb={5}>
        First at all, choose difficulty and then choose one category from list.
      </Text>
      <Text color='white' fontSize='md' mb={5}>
        Finally, press on START QUIZ.
      </Text>
      <Text color='white' fontSize='md' mb={5}>
        Good Luck !
      </Text>
    </Box>
  )
}

export default InstructionsPanel
