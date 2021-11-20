import { Box, Text } from '@chakra-ui/layout'

type Props = {
  message: string
}

const InstructionsPanel = () => {
  return (
    <Box>
      <Text 
        fontWeight='bold'
        color='white' 
        fontSize='2xl' 
        mb={5}>Instructions</Text>
      <Text color='white' fontSize='md' mb={5}>
        First, choose any difficulty and then choose from a list of categories.
      </Text>
      <Text color='white' fontSize='md' mb={5}>
        Test your kwnoledge. Good Luck !
      </Text>
    </Box>
  )
}

export default InstructionsPanel
