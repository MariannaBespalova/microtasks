import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
  addTaskHandler: (title: string) => void
}

export const FullInput = (props:FullInputPropsType) => {
  let [title, setTitle] = useState("")
  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const onclickButtonTitle = () => {
    props.addTaskHandler(title)
    setTitle("")
  }
  return (
    <div>
      <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onclickButtonTitle}>+</button>
      </div>
    </div>
  );
};
