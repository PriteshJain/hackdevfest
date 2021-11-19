import { shuffleArray } from "../helpers/shuffleArray";
import { Difficulty, Question } from "../types/quiz";

// enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard"
// }


export const getQuestions = async (amount: number) => {
  
  let filterCategory = ''
  
  const difficulty = localStorage.getItem('difficulty')
  
  const idCategory = localStorage.getItem('category')

  //FIXME: I have problems when User select any category
  if(idCategory){
    filterCategory = `&category=${ idCategory }`
  }

  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple${ filterCategory }`;
  const request = await fetch(endpoint);
  const { results } = await request.json();
  
  return results.map((question: Question) => ({ 
    ...question,
    listAlternatives: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
}