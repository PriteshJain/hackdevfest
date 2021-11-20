import { Box, Stack, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { Answer } from "../../types/quiz";

import Alternative from "./Alternative";
import Question from "./Question";

type Props = {
  question: string;
  alternatives: string[] | undefined;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  leftGame: VoidFunction;
  nextQuestion: VoidFunction;
  userAnswer: Answer | undefined;
  currentNumberQuestion: number;
};

const QuestionCard = ({
  question,
  alternatives,
  checkAnswer,
  leftGame,
  nextQuestion,
  userAnswer,
  currentNumberQuestion,
}: Props) => {

  return (
    <Box mb="4">
      <Box mb="6">
        <Question
          title={question}
          currentNumberQuestion={currentNumberQuestion}
        />
      </Box>
      <Box mb="4">
        {
          <Stack spacing="2">
            {alternatives?.map((alternative, index) => (
              <Alternative
                key={index}
                title={alternative}
                checkAnswer={checkAnswer}
                isCorrect={userAnswer?.correct_answer === alternative}
                isUserClicked={userAnswer?.userAnswer === alternative}
                isDisabled={userAnswer ? true : false}
              />
            ))}
          </Stack>
        }
      </Box>
      <Flex>
        <Button
          backgroundColor="gray.200"
          leftIcon={<ArrowBackIcon />}
          onClick={leftGame}
        >
          Quit Quiz
        </Button>
        <Spacer />
        <Button
          colorScheme="cyan"
          rightIcon={<ArrowForwardIcon />}
          onClick={nextQuestion}
          color="white"
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default QuestionCard;
