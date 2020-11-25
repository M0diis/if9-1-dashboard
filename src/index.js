import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Button from './components/send_button';
import TextArea from './components/text_area';

function App()
{
  return (
    <div className="App">

      <p>Hello</p>
      <TextArea />
      <Button />

    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

