import { createContext } from "react";
import { QuestionContext } from "../@types";

export const GlobalContext = createContext<QuestionContext>(
  {} as QuestionContext
);
