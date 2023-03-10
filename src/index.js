import React from 'react';
//import ReactDom from 'react-dom'
import App from './app'



//ReactDom.render(<App></App>, document.getElementById('root'))

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);