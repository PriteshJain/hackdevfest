import { Button } from '@chakra-ui/button'
import { Stack, Text } from '@chakra-ui/layout'

type Props = {
  title: string
  isDisabled: boolean
  isCorrect: boolean | undefined
  isUserClicked: boolean | undefined
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Alternative = ({ title,isDisabled,isCorrect,isUserClicked,checkAnswer }: Props) => {

  const color = isCorrect 
    ? '#12c69d' 
    : !isCorrect && isUserClicked 
    ? 'red.400' 
    : '#aeb2bd'

  return (
    <Stack spacing='3'>
      <Button
        color={ color }
        borderColor={ color }
        boxShadow='none'
        pointerEvents={ isDisabled ? 'none' : 'auto' }
        variant='outline'
        value={ title }
        onClick={ checkAnswer }
        outline='none'
        _hover={{ bg: "rgba(144, 205, 244, 0.10)" }}
      >
        <Text dangerouslySetInnerHTML={{ __html: title }} />
      </Button>
    </Stack>
  )
}

export default Alternative
