import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal([
  `
  body {
    font-family: Lato;
    margin: 0;
  };
`
]);

render(<App />, document.getElementById('react-root'));
