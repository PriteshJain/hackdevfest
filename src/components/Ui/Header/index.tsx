import { Heading } from '@chakra-ui/layout'

type Props = {
  content: string;
}

const Header = ({ content }: Props) => {
  return (
    <Heading 
      fontSize='4xl' 
      className='color-text'
      mt={50}
      mb={20}>
        { content }
    </Heading>
  )
}

export default Header
