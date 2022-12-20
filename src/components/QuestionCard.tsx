import { useContext } from 'react';
import { Question } from '../@types';
import { GlobalContext } from '../context/GlobalContext';

const QuestionCard = ({
  question,
  questiontype,
  questionoption, // Destructuring the props
  result,
}: Question) => {
  const { selectedOptions } = useContext(GlobalContext); // Consuming selectedOptions using useContext hook

  return (
    <div>
      <p className='text-center p-5 text-xl'>{question}</p>
      {questiontype &&
        questionoption.map((option, i) =>
          !result ? (
            // Display question and options for selection
            <div className='p-1 border w-full' key={i}>
              <input
                type={questiontype.toLowerCase()}
                name={question}
                className='ml-2 mr-2'
                onChange={(e) => {
                  selectedOptions.set(question, {
                    value: e.target.value,
                    option,
                  });
                }}
              />
              {questiontype.toLowerCase() === 'textarea' ||
              questiontype.toLowerCase() === 'date'
                ? ''
                : option.price}
            </div>
          ) : (
            // Display question and opions selected
            <div className='p-1 border w-full' key={i}>
              <input
                type={questiontype.toLowerCase()}
                name={question}
                className='ml-2 mr-2'
                checked={
                  selectedOptions.get(question).option.optionid ===
                  option.optionid
                    ? true
                    : false
                }
                value={selectedOptions.get(question).value}
                onChange={(e) => {}}
              />
              {questiontype.toLowerCase() === 'textarea' ||
              questiontype.toLowerCase() === 'date'
                ? ''
                : option.price}
            </div>
          )
        )}
    </div>
  );
};

export default QuestionCard;
