export type QuestionType = 'logical' | 'mathematical' | 'spatial' | 'verbal';

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl?: string;
}

export interface TestResult {
  score: number;
  iqEstimate: number;
  breakdown: {
    logical: number;
    mathematical: number;
    spatial: number;
    verbal: number;
  };
  totalQuestions: number;
}
