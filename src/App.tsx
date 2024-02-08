import React, {useState} from 'react';
import { Button } from './components/Button';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";

export type FilterType = 'All' | 'Dollar' | 'Ruble'

function App() {
  const [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
      {message: 'message4'},
      {message: 'message5'}
    ]
  )

  let [title, setTitle] = useState<string>('')

  const addTaskHandler = (task:string) => {
    let newMessage = {message: task}
    setMessage([newMessage, ...message ])
  }

   const callBackButtonHandler = () => {
     addTaskHandler(title)
     setTitle('')
   }

  return (
    <div className="App">
      {/*<FullInput addTaskHandler={addTaskHandler}/>*/}
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Input setTitle={setTitle}  title={title}/>
      <Button name={"+"} callback={callBackButtonHandler}  />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}

export default App;
