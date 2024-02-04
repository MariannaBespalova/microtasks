import {Button} from "./Button";
import React from "react";
import {FilterType} from "../App";

type ContentComponentPropsType = {
  currentMoney: Array<MoneyPropsType>
  filterClick: (buttonName: FilterType) => void
}

type MoneyPropsType = {
  banknote: string
  nominal: number
  number: string
}

export function ContentComponent(props: ContentComponentPropsType) {
  return (
    <div>
      <ul>
        {props.currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>

      <div style={{marginLeft: "20px"}}>
        <Button callback={() => props.filterClick("All")} name="All"/>
        <Button callback={() => props.filterClick("Ruble")} name="Ruble"/>
        <Button callback={() => props.filterClick("Dollar")} name="Dollar"/>
      </div>

    </div>
  );
}
