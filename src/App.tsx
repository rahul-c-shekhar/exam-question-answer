import './App.css';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Data from './data/question-answers.json';
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
import CustButton from './components/CustButton';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='rounded overflow-hidden shadow-2xl shadow-black opacity-100 h-96 w-96'>
        <div className='p-3'>
          <BiLeftArrowAlt
            size={30}
            className={currQuestion === 0 ? 'invisible' : ''}
            onClick={() => setCurrQuestion(currQuestion - 1)}
          />
        </div>
        <div className='bg-white h-60 w-full '>
          <QuestionCard {...Data.questions[currQuestion]} key={currQuestion} />
        </div>
        <div className='flex justify-end'>
          {currQuestion === Data.questions.length - 1 ? (
            <CustButton text='Submit' onClick={() => setHasCompleted(true)} />
          ) : (
            <CustButton
              text='Next'
              onClick={() => setCurrQuestion(currQuestion + 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
