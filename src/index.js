import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './component/greeting';
import Counter from './component/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Greeting name={'Arun'}/>
   <Counter />
  </React.StrictMode>
);


