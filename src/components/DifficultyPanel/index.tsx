import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Radio, RadioGroup, HStack } from "@chakra-ui/react";

const DifficultyPanel = () => {


  const handleSave = (difficulty: string) => {
    localStorage.setItem('difficulty', difficulty);
  }

  return (
    <FormControl color='white' mb='10'>
      <FormLabel as="legend" fontWeight='bold' fontSize='3xl'>Choose Difficulty</FormLabel>
      <RadioGroup defaultValue="easy" name='difficulty' id='difficulty' onChange={ handleSave }>
        <HStack spacing="34px">
          <Radio value="easy">Easy</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="hard">Hard</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default DifficultyPanel;
