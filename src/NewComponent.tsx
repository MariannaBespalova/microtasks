import React from "react";

type NewComponentType = {
  students: StudentPropsType[]
}

type StudentPropsType = {
  id: number,
  name: string,
  age: number
}

type TopCarsPropsType = CarsPropType[]


type CarsPropType = {
  manufacturer: string,
  model: string
}

export function NewComponent(props: NewComponentType) {
  const topCars: TopCarsPropsType = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]
  return (
    <div>
      <ul>
        {props.students.map((student: StudentPropsType) => {
          return <li key={student.id}>
            {student.name} : {student.age}
          </li>
        })}
      </ul>

      <table>
        <thead>
        <tr>
          <th>manufacturer</th>
          <th>model</th>
        </tr>
        </thead>
        <tbody>
        {topCars.map((car: CarsPropType, index) => {
          return (
            <tr key={index}>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
          )
        })}
        </tbody>


      </table>
    </div>
  )
}