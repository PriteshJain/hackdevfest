import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react"

type Props = {
  id: number
  name: string
  icon: string
  handleSave: (idCategory: number) => void
}

const Category = ({ id, name, icon, handleSave }: Props) => {
  return (
    <Stack  as='button' 
            border="1px"
            borderRadius="15px"
            borderColor="#ccd0d5"
            padding='6px'
            align={'center'} 
            justify={'center'}
            onClick={ () => handleSave(id) }>
      <Flex mb={1}>
        <Image src={ icon } alt={ name } width="24" height="24" />
      </Flex>
      <Text fontWeight={600} color='white'>
      { name }
      </Text>
    </Stack>
  );
};

export default Category
