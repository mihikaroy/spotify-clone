import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./utils/StateProvider";
import reducer from './utils/reducer';

const validInitialState = {
  token: null
};

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={validInitialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);





