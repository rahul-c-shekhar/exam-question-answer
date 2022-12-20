import { createContext } from 'react';
import { QuestionContext } from '../@types';

// Creating a global context to track user selections
export const GlobalContext = createContext<QuestionContext>(
  {} as QuestionContext
);
