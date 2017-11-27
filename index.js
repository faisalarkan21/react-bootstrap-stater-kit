import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store/configureStore';
import Root from './src/containers/App';

// eslint-disable-next-line
import 'typeface-roboto'; 
import './public/style/base.scss';

ReactDOM.render(

  <Provider store={store}>
    <Root />
  </Provider>

  , document.getElementById('root'),
);

