import { useContext } from 'react'

import { Text, Flex, Image, Stack, StackProps } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { PreferencesContext } from '../../../../context/PreferencesContext'

export const MotionStack = motion<StackProps>(Stack)

type Props = {
  id: number
  name: string
  icon: string
}

const Category = ({ id, name, icon }: Props) => {

  const { preferences, setPreferences } = useContext(PreferencesContext)

  const isSelected = preferences.idCategory === id
  
  return (
    <MotionStack as='button' 
                  border={ isSelected ? '2px' : '1px' }
                  borderRadius='15px'
                  borderColor={ isSelected ? '#12c69d' : '#ccd0d5'}
                  backgroundColor={ isSelected ? 'rgba(144, 205, 244, 0.20)' : ''}
                  padding='6px'
                  align='center'
                  justify='center'
                  onClick={ () =>  setPreferences((prevPref) => ({ ...prevPref, idCategory: id, nameCategory: name }))}
                  whileHover={{ scale: 1.1 }}>
      <Flex mb={1}>
        <Image src={ icon } alt={ name } width='24' height='24' />
      </Flex>
      <Text fontWeight={600} color='white'>{ name }</Text>
    </MotionStack>
  )
}

export default Category
