import { useRef } from 'react'
import { Howl } from 'howler'

const useSound = (path: string | string[]) => {

  const sound = useRef(new Howl({
    src: path
  }))

  const play = () => {
    sound.current.play()
  }

  const stop = () => {
    sound.current.stop()
  }

  return [
    play,
    stop
  ]
}

export default useSound