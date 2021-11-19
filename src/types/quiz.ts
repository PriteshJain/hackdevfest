export type Question = {
  category: string
  correct_answer: string
  difficulty: Difficulty
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

export type Difficulty = "easy" | "medium" | "hard"

export type Quiz = {
  questions: Question[]
  answers: Answer[]
  totalScore: number
  isGameOver: boolean
  isLeft: boolean
  currentNumberQuestion: number
}

export type Category = {
  id: number
  name: string
  icon: string
}