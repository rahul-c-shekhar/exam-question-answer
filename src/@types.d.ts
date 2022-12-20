import React from 'react';

export type QuestionOption = {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: any;
};

export type Question = {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: QuestionOption[];
  result: boolean;
};

export type ButtonProp = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
};

export type QuestionContext = {
  currQuestion: number;
  questions: Question[];
};
