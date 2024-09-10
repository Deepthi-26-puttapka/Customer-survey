import React from 'react';

const Rate3 = ({ question, onAnswer, savedAnswer }) => {
  const handleRatingChange = (e) => {
    onAnswer(question.id, parseInt(e.target.value));
  };

  const handleTextChange = (e) => {
    onAnswer(question.id, e.target.value);
  };

  return (
    <div>
      <p>{question.text}</p>
      {question.type === 'rating' && (
        <div>
          {[...Array(question.scale)].map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question_${question.id}`}
                value={index + 1}
                checked={savedAnswer === index + 1}
                onChange={handleRatingChange}
              />
              {index + 1}
            </label>
          ))}
        </div>
      )}
      {question.type === 'text' && (
        <textarea
          rows="5"
          cols="30"
          value={savedAnswer || ''}
          onChange={handleTextChange}
        />
      )}
    </div>
  );
};

export default Rate3;
