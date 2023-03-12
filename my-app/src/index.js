import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import App from './App';
import Clock from './Clock-Comp';
import App3 from './components/Homepage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
// console.log(element);
// ReactDOM.render(element, document.getElementById('root'));

// reportWebVitals();



// const element=(
//   <h1 className='heading'>
//     <span className='text'>Hello worlllld</span>
//     <img src ="" />
//   </h1>
// );


// console.log(element);
// root.render(element);


// reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

