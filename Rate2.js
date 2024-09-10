import React from 'react';

const Rate2 = ({ onStart }) => {
  return (
    <div className='msg' style={{ textAlign: 'center' }}>
      <h1>Customer Survey</h1>
      <button className='btn' onClick={onStart} style={{ padding: '10px 20px', fontSize: '25px', cursor: 'pointer' }}>
        Start Survey
      </button>
    </div>
  );
};

export default Rate2;
