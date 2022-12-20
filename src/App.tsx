import './App.css';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Data from './data/question-answers.json';
import QuestionCard from './components/QuestionCard';
import { createContext, Fragment, useState } from 'react';
import CustButton from './components/CustButton';
import { QuestionContext } from './@types';

// export const QuestionsContext = createContext<QuestionContext>(
//   {} as QuestionContext
// );

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);

  const { questions } = Data;

  return (
    // <QuestionsContext.Provider value={{ currQuestion, questions }}>
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='rounded shadow-2xl shadow-black opacity-100 overflow-auto w-96'>
        {hasCompleted ? (
          <div className='bg-white '>
            <h1 className='text-center text-2xl'>Results</h1>
            {questions.map((question, i) => (
              <div className='p-2 mt-2' key={i}>
                <QuestionCard {...question} result={true} />
              </div>
            ))}
            <div className='flex justify-center'>
              <CustButton
                text='Play Again?'
                onClick={() => window.location.reload()}
              />
            </div>
          </div>
        ) : (
          <Fragment>
            <div className='p-3'>
              <BiLeftArrowAlt
                size={30}
                className={currQuestion === 0 ? 'invisible' : ''}
                onClick={() => setCurrQuestion(currQuestion - 1)}
              />
            </div>
            <div className='bg-white h-60 w-full '>
              <QuestionCard
                {...questions[currQuestion]}
                result={false}
                key={currQuestion}
              />
            </div>
            <div className='flex justify-end'>
              {currQuestion === questions.length - 1 ? (
                <CustButton
                  text='Submit'
                  onClick={() => setHasCompleted(true)}
                />
              ) : (
                <CustButton
                  text='Next'
                  onClick={() => setCurrQuestion(currQuestion + 1)}
                />
              )}
            </div>
          </Fragment>
        )}
        {/* // </QuestionsContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
