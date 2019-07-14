import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      //wrap provider around everything below
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
