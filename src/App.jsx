import React, { useState } from 'react';
import './App.css';
import { Message, MessageClass } from './components/Message'
import { Button } from './components/Button'

export function App() {
  const messageTextFunc = 'Привет, я функциональный компонент'
  const messageTextClass = 'Привет, я классовый компонент'
  const [switcherComponents, setSwitcherComponents] = useState(false);
  
  return (
    <div className="App">
      {
        switcherComponents ?
        <Message text={messageTextFunc}/> :
        <MessageClass text={messageTextClass}/>
      }
      <Button name={'Сменить тип компонента'} onClick={()=> setSwitcherComponents(!switcherComponents)}/>
    </div>
  );
}
