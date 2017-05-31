import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layout/App.js';
import { BrowserRouter } from 'react-router-dom'

import '../asset/less/nexus.less';

ReactDOM.render((
  <BrowserRouter> 
    <App/> 
  </BrowserRouter>
), document.getElementById('root'));
 