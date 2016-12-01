import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import ExpedientesManager from './components/expedientes/ExpedientesManager';

render(
  <ExpedientesManager />,
  document.getElementById('app')
);
