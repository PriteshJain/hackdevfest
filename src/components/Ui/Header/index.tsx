import { Heading, Container } from '@chakra-ui/layout'
import { Stack } from '@chakra-ui/react'

type Props = {
  content: string
}

const Header = ({ content }: Props) => {
  return (
    <Stack as={Container} textAlign={'center'}>
      <Heading 
        fontSize='4xl' 
        color='#12c69d'
        mb={10}>
        { content }
      </Heading>
    </Stack>
  )
}

export default Header
