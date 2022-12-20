// import { useContext } from 'react';
import { Question } from '../@types';
// import { QuestionsContext } from '../App';

const QuestionCard = ({
  question,
  questiontype,
  questionoption,
  result,
}: Question) => {
  // const { currQuestion, questions } = useContext(QuestionsContext);

  // console.log(questions);

  return (
    <div>
      <p className='text-center p-5 text-xl'>{question}</p>
      {questiontype &&
        questionoption.map((option, i) =>
          !result ? (
            <div className='p-1 border w-full' key={i}>
              <input
                type={questiontype.toLowerCase()}
                name={question}
                className='ml-2 mr-2'
                onChange={(e) => {
                  option.selected = true;
                  option.optionvalue = e.target.value;
                }}
              />
              {questiontype.toLowerCase() === 'textarea' ||
              questiontype.toLowerCase() === 'date'
                ? ''
                : option.price}
            </div>
          ) : (
            <div className='p-1 border w-full' key={i}>
              <input
                type={questiontype.toLowerCase()}
                name={question}
                className='ml-2 mr-2'
                checked={option.selected ? true : false}
                value={option.optionvalue}
                onChange={(e) => {
                  option.selected = true;
                  option.optionvalue = e.target.value;
                }}
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
