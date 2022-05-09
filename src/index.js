import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// import CSS from './CSS/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);;
