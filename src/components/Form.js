import {createRef, useState} from "react";
import {saveCar} from "../services/cars.api";

export default function Form() {
// let refObject = createRef()
//   let [formState, setFormState] = useState({model: '', price: '', year: ''})
// let onFormInputChange = (e) => {
//   setFormState({...formState, [e.target.name]: e.target.value})
// }


let save = (e) => {
  e.preventDefault()
  // console.log(formState);
  // console.log(refObject);
  let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
  saveCar(carToSave)
}

  return (
    <div>
      <form onSubmit={save}> {/*ref={refObject}*/}
        <input type="text" name={'model'} placeholder={'model'} />
        <input type="text" name={'price'} placeholder={'price'} />
        <input type="text" name={'year'} placeholder={'year'} />
        <input type="submit"/>
      </form>

    </div>
  );
}