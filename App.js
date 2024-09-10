
import React, {useState}  from 'react';
import Rate from './components/Rate.js';
import Rate2 from './components/Rate2.js';
import './App.css'; 
const App = () => {
  const [started, setStarted] = useState(false);

  const startSurvey = () => {
    setStarted(true);
  };

  return (
    <div>
      {started ? <Rate /> : <Rate2 onStart={startSurvey} />}
    </div>
  );
};

export default App;
