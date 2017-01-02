import React from 'react';
//importing render method
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';

render(
  //rendering StorePicker component
  <StorePicker />,
  //selecting place component is being rendered to
  document.querySelector('#main')
);
