import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import page from './data/page.json'


ReactDOM.render(
  <App data={page} />,
  document.getElementById('react-container')
);
