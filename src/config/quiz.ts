import { Category, Difficulty } from '../types/quiz'

import MovieIcon from '../assets/svg/movie-icon.svg'
import MusicIcon from '../assets/svg/music-icon.svg'
import VideoGamesIcon from '../assets/svg/videogames-icon.svg'
import ComputerIcon from '../assets/svg/computer-icon.svg'
import MathIcon from '../assets/svg/math-icon.svg'
import MythologyIcon from '../assets/svg/mythology-icon.svg'
import SportIcon from '../assets/svg/sport-icon.svg'
import HistoryIcon from '../assets/svg/history-icon.svg'
import VehicleIcon from '../assets/svg/vehicle-icon.svg'
import AnimalIcon from '../assets/svg/animal-icon.svg'
import ComicIcon from '../assets/svg/comic-icon.svg'
import AnyIcon from '../assets/svg/any-icon.svg'

const TOTAL_QUESTIONS = 10

const CATEGORIES: Category[] = [
  { id: 1,  name: 'Any Category', icon: AnyIcon },
  { id: 11, name:  'Film', icon: MovieIcon },
  { id: 12, name: 'Music', icon: MusicIcon },
  { id: 15, name: 'Video Games', icon: VideoGamesIcon },
  { id: 18, name: 'Computers', icon: ComputerIcon },
  { id: 19, name: 'Mathematics', icon: MathIcon },
  { id: 20, name: 'Mythology', icon: MythologyIcon },
  { id: 21, name: 'Sports', icon: SportIcon },
  { id: 23, name: 'History', icon: HistoryIcon },
  { id: 27, name: 'Animals', icon: AnimalIcon },
  { id: 28, name: 'Vehicles', icon: VehicleIcon },
  { id: 29, name: 'Comics', icon: ComicIcon },
]

const config = {
  totalQuestions: TOTAL_QUESTIONS,
  categories: CATEGORIES,
  preferences: {
    idCategory: 1,
    nameCategory: 'ANY',
    difficulty: Difficulty.EASY
  }
}

export default config