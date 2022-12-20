import React from 'react';
import { Map } from 'typescript';

// All types being used in the project must be defined in this file

export type ButtonProp = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

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

export type SelectedDataValue = {
  value: any;
  option: QuestionOption;
};

export type SelectedData = Map<string, SelectedDataValue>;

export type QuestionContext = {
  selectedOptions: SelectedData;
};
