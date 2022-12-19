/// <reference types="react-scripts" />

type QuestionOption = {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: {};
  selected: boolean;
  subquestion: string[];
};

type Question = {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: QuestionOption[];
};
