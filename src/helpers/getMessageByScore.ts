import config from "../config/quiz"
import SadImage from '../assets/images/sad.png'
import HappyImage from '../assets/images/happy.png'
import ConfusedImage from '../assets/images/sad.png'


export const getMessageByScore = (score: number) => {

  if(score === config.totalQuestions) return { message: 'Congratulations', image: HappyImage }
  else if(score > 4) return { message: 'Keep Trying!', image: ConfusedImage }
  
  return { message: 'You Lose', image: SadImage }
}