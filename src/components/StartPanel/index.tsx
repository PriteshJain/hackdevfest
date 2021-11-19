import { Box, Button, Flex } from "@chakra-ui/react"
import DifficultyPanel from "../DifficultyPanel"
import PanelCategories from "./PanelCategories"

type Props = {
  startGame: VoidFunction;
};

const StartPanel = ({ startGame }: Props) => {
  return (
    <Flex 
        direction='column'
        alignItems="center" 
        justifyContent="center" >
      <DifficultyPanel />
      <PanelCategories />      
      <Box w='100%' textAlign='right'>
        <Button
            colorScheme="cyan"
            color="white"
            variant="solid"
            onClick={startGame}
          >
            START QUIZ
          </Button>
      </Box> 
      
    </Flex>
    
  )
}

export default StartPanel
