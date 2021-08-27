import {useEffect, useState} from "react";
import {getCars} from "../services/cars.api";
import Car from "./Car";

export default function Cars() {
  let [cars, setCars] = useState([])
  useEffect(() => {
    getCars().then(value => setCars([...value]))
  }, [])

  return (
    <div>
      {
        cars.map(value => <Car key={value.id} car={value}/>)
      }

    </div>
  );
}