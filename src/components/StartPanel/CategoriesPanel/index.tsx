import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import config from '../../../config/quiz'

import Category from './Category'

const CategoriesPanel = () => {

  return (
    <Box>
      <Text fontWeight='bold' color='white' fontSize='2xl' mb={5}>Choose Category</Text>
      <SimpleGrid mb={ 10 } columns={{ base: 2, md: 4 }} spacing={5}>
        {config.categories.map((category) => (
          <Category 
            key={category.id} 
            {...category} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CategoriesPanel
