import React, { useState, useEffect } from 'react';
import Rate3 from './Rate3';

const Rat = [
  { id: 1, text: "1. How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "2. How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "3. How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "4. On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "5. What could we do to improve our service?", type: "text" }
];

const Rate = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    
    const uniqueId = `session_${new Date().getTime()}`;
    setSessionId(uniqueId);
  }, []);

  const handleAnswer = (questionId, answer) => {
    
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    localStorage.setItem(sessionId, JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    if (currentQuestionIndex < Rat.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  
  const currentQuestion = Rat[currentQuestionIndex];

  return (
    <div className="st1" style={{ textAlign: 'center', marginTop: '50px' ,fontweight:'bold' }}>
      <p className="hi"> Customer Survey </p>
      <h2 className="num"> {currentQuestionIndex + 1}/{Rat.length}</h2>
      <Rate3 
        question={currentQuestion} 
        onAnswer={handleAnswer} 
        savedAnswer={answers[currentQuestion.id]} 
      />
      <div style={{ marginTop: '20px' }}>
        <button className="button2" onClick={handlePrev} disabled={currentQuestionIndex === 0} style={{padding:'12px 25px', marginright:'160px'}}>Prev</button>
        </div>
        <div style={{ marginTop: '-50px',fontweight:'bold' }}>
        <button className="button1" onClick={handleNext} disabled={currentQuestionIndex === Rat.length - 1} style={{padding:'12px 25px'}}>Next</button>
      </div>
    </div>
  );
};

export default Rate;
