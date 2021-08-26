import {useState} from "react";
import {saveCar} from "../services/car.api.servise";


export default function Form() {

    // let [id, setId] = useState('enter id') // необязательное
    // let [model, setModel] = useState('enter model') // необязательное
    // let [price, setPrice] = useState('enter price') // необязательное
    // let [year, setYear] = useState('enter year') // необязательное

    let onFormSubmit = (e) => {
      e.preventDefault()
      // console.log(e.target.id.value)
      // console.log(e.target.model.value);
      // console.log(e.target.price.value);
      // console.log(e.target.year.value);

      let carToSave = {
          // 'id': e.target.id.value, // сервер як правило сам генерує id
          'model': e.target.model.value,
          'price': e.target.price.value,
          'year': e.target.year.value,
      }
        console.log(carToSave);
      saveCar(carToSave)
    }

  return (
    <div>
     <form onSubmit={onFormSubmit}>
         {/*<input type="text" name={'id'} placeholder={'id'}/>*/} // сервер як правило сам генерує id
         <input type="text" name={'model'} placeholder={'model'}/>
         <input type="text" name={'price'} placeholder={'price'}/>
         <input type="text" name={'year'} placeholder={'year'}/>
         <button>save</button>
     </form>

    </div>
  );
}