import {createRef, useState} from "react";
import {saveCar} from "../services/car.api.servise";

export default function SuperForm() {
    // let [model, setModel] = useState('')
    // let [price, setPrice] = useState('')
    // let [year, setYear] = useState('')

    let refObject = createRef()
    let [formState, setFormState] = useState({model: '', price: '', year: ''})

    // let onCarModelChange = (e) => {
    //     console.log(e.target.value)
    //     setModel(e.target.value)
    // }
    // let onCarPriceChange = (e) => {
    //     console.log(e.target.value)
    //     setPrice(e.target.value)
    // }
    // let onCarYearChange = (e) => {
    //     console.log(e.target.value)
    //     setYear(e.target.value)
    // }

    let onFormInputChange = (e) => {
        if ((e.target.name === 'model' && e.target.value.length <= 20) ||
            (e.target.name === 'price' && e.target.value > 0) ||
            (e.target.name === 'year' && (e.target.value >= 2000 && e.target.value <= 2021))
        ) {
            setFormState({...formState, [e.target.name] : e.target.value})
        }

        // console.log(e.target.name)
        // let x = {[e.target.name]: e.target.value}
        // console.log(x);
    }

    let save = (e) => {
        e.preventDefault()
        console.log(formState);
        // saveCar(formState)
        console.log(refObject);
    }

  return (
    <div>
        <form onSubmit={save} ref={refObject}>
            <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
            <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
            <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
            <input type="submit"/>
        </form>

    </div>
  );
}