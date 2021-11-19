import { SimpleGrid } from "@chakra-ui/react"

import config from "../../../config/quiz"

import Category from "./Category"

const PanelCategories = () => {

  const handleSave = (idCategory: number) => {
    localStorage.setItem('category', idCategory.toString())
  }

  return (
    <SimpleGrid 
        mb={ 10 }
        columns={{ base: 2, md: 4 }} 
        spacing={ 5 }>
      {config.categories.map((category) => (
        <Category  
            key={category.id} 
            handleSave={ handleSave }
            {...category} />
      ))}
    </SimpleGrid>
  );
};

export default PanelCategories;
