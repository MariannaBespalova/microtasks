import React, {useState} from 'react';
/*import {Button} from "./../components/Button";*/
import {ContentComponent} from "./ContentComponent";
import {Button} from "./Button";

export type FilterType = 'All' | 'Dollar' | 'Ruble'

function Microtask() {
  let [num, setNum] = useState(1)
  const [students, setStudents] = useState([
      {id: 1, name: "James", age: 8},
      {id: 2, name: "Robert", age: 18},
      {id: 3, name: "John", age: 28},
      {id: 4, name: "Michael", age: 38},
      {id: 5, name: "William", age: 48},
      {id: 6, name: "David", age: 58},
      {id: 7, name: "Richard", age: 68},
      {id: 8, name: "Joseph", age: 78},
      {id: 9, name: "Thomas", age: 88},
      {id: 10, name: "Charles", age: 98},
      {id: 11, name: "Christopher", age: 100},
    ]
  )

  const [money, setMoney] = useState([
    {banknote: "dollar", nominal: 100, number: "a123456789"},
    {banknote: "dollar", nominal: 50, number: "b123456789"},
    {banknote: "ruble", nominal: 100, number: "c123456789"},
    {banknote: "dollar", nominal: 100, number: "d123456789"},
    {banknote: "dollar", nominal: 50, number: "e123456789"},
    {banknote: "ruble", nominal: 100, number: "f123456789"},
    {banknote: "dollar", nominal: 50, number: "j123456789"},
    {banknote: "ruble", nominal: 50, number: "h123456789"}
  ])

  let [filter, setFilter] = useState<FilterType>("All")

  let currentMoney = money;

  if (filter === "All") {
    currentMoney = money;
  } else if (filter === "Dollar"){
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar" )
  } else if (filter === "Ruble"){
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble" )
  }

  /*  const initialButton = (event:MouseEvent<HTMLButtonElement>) => {
      return console.log(`I'm first`)
    }*/

  /*  const firstSubscriber = () =>{
      console.log('Dima')
    }

    const secondSubscriber = (name:string) => {
      return console.log(name)
    }*/


  const increaseNumber = () => {
    setNum(++num);
  }
  const setToZero = () => {
    setNum(0)
  }

  const handlerFilterClick = (buttonName: FilterType) => {
    setFilter(buttonName)
  }

  return (
    <div>

      {/*      <button onClick={initialButton}>Click me</button>*/}
      {/*      <button onClick={firstSubscriber}>Click me</button>
      <button onClick={() => secondSubscriber('Nick')}>Click me</button>*/}

      {/*      <NewComponent students={students}/>*/}
      {/*
      <Button callback={firstSubscriber} name='Channel1'/>
      <Button callback={()=>secondSubscriber('Second')} name='Channel2'/>*/}
      <div>{num}</div>
      <Button callback={increaseNumber} name={'Increase'}/>
      <Button callback={setToZero} name={'Zero'}/>
      <ContentComponent currentMoney={currentMoney} filterClick={handlerFilterClick}/>

    </div>
  );
}

export default Microtask;
