import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from './components/Highlight';

ReactDOM.render(
  <React.StrictMode>
    <Highlight disable={true}>
    <h1>hello</h1>
    </Highlight>
  </React.StrictMode>,
  document.getElementById('root')
);
