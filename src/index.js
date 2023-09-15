import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { StateProvider } from './Assets/SatateProvider';
import reducer, {initialState} from './Assets/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
