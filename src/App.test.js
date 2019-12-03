/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';

/// internal modules ///
import App from './App';

/***************************************
  TEST
***************************************/
it ('renders without crashing' , () => {
  const div = document.createElement ('div');
  ReactDOM.render (<App/> , div);
  ReactDOM.unmountComponentAtNode (div);
});
