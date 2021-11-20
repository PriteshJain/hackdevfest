import { shuffleArray } from "../helpers/shuffleArray";
import { Question } from "../types/quiz";

export const getQuestions = async (amount: number, idCategory: number, difficulty: string) => {
  
  let filterCategory = ''

  if(idCategory !== 1){
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