import React from 'react';
//importing render method
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';

render(
  //rendering StorePicker component
  <App />,
  //selecting place component is being rendered to
  document.querySelector('#main')
);
