import { Button } from "@chakra-ui/button";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

type Props = {
  nextQuestion: VoidFunction;
};

const NextButton = ({ nextQuestion }: Props) => {
  return (
    <Flex>
      <Button 
        backgroundColor="gray.200" 
        leftIcon={<ArrowBackIcon />}>
        Quit Quiz
      </Button>
      <Spacer />
      <Button 
        backgroundColor="cyan.400" 
        rightIcon={<ArrowForwardIcon />}
        onClick={ nextQuestion }
        color='white'>
        Next
      </Button>
    </Flex>
  );
};

export default NextButton;
