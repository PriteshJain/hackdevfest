export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export type Category = {
  id: number
  name: string
  icon: string
}

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
  listAlternatives?: string[]
}

export type Answer = {
  question: string
  userAnswer: string
  isCorrect: boolean
  correct_answer: string
}

export type Quiz = {
  questions: Question[]
  answers: Answer[]
  totalScore: number
  isGameOver: boolean
  isLeft: boolean
  currentNumberQuestion: number
}

export type Preferences = {
  idCategory: number
  nameCategory: string
  difficulty: string
}
