import React from 'react';

 
function CircularProgress({ percentage,color }) {
  return (
    <div className="circular-progress">
      <div
        className="circular-progress-inner"
        style={{
          background: `conic-gradient(${color} ${percentage * 3.6}deg, lightgray ${percentage * 3.6}deg)`
        }}
      >
        <div className="circular-progress-content">
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;
