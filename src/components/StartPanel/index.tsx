import { Box, Button, Stack, Container } from '@chakra-ui/react'

import DifficultyPanel from './DifficultyPanel'
import CategoriesPanel from './CategoriesPanel'
import InstructionsPanel from './InstructionsPanel'

type Props = {
  startGame: VoidFunction
  isLoading: boolean
}
/**
 * 
  position: fixed;
  bottom: 20px;
  border-radius: 50%;
  right: 50px;
 */
const StartPanel = ({ startGame, ...props }: Props) => {
  
  return (
    <Stack as={Container} >
      <InstructionsPanel />
      <DifficultyPanel />
      <CategoriesPanel />      
      <Box textAlign='right'>
        <Button
            { ...props }
            loadingText='Loading...'
            colorScheme='cyan'
            color='white'
            variant='solid'
            spinnerPlacement='end'
            onClick={ startGame }>
            START QUIZ
        </Button>
      </Box> 
    </Stack>
    
  )
}

export default StartPanel
