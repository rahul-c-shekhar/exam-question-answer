import React from 'react';

type QuestionOption = {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
};

type Question = {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: QuestionOption[];
};

const QuestionCard = ({
  question,
  questiontype,
  questionid,
  questionoption,
}: Question) => {
  return (
    <div>
      <p className='text-center p-5 text-xl'>{question}</p>
      {questiontype &&
        questionoption.map((option, i) => (
          <div className='p-1 border w-full' key={i}>
            <input
              type={questiontype.toLowerCase()}
              name='price'
              className='ml-2 mr-2'
            />
            {questiontype.toLowerCase() === 'textarea' ||
            questiontype.toLowerCase() === 'date'
              ? ''
              : option.price}
          </div>
        ))}
    </div>
  );
};

export default QuestionCard;
