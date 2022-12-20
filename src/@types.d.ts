import React, { Dispatch, SetStateAction } from 'react';
import { Map } from 'typescript';

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

export type ButtonProp = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
};

export type SelectedDataValue = {
  value: any;
  option: QuestionOption;
};

export type SelectedData = Map<string, SelectedDataValues>;

export type QuestionContext = {
  selectedOptions: SelectedData;
};
