import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const cotainer = document.getElementById('root');
const root = createRoot(cotainer);

root.render(

  <App />

);

