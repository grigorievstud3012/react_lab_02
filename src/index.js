import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Num1.jsx';
import Job from './Num2.jsx'

ReactDOM.render(
  <div>
    <Clock format="12" timezone='+5:00'></Clock>
    <Job></Job>
  </div>,
  document.getElementById('root')
);

