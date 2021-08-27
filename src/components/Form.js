export default function Form() {
let refObject = createRef()
  let [formState, setFormState] = useState({model: '', price: '', year: ''})
let onFormInputChange = (e) => {
  setFormState({...formState, [e.target.name]: e.target.value})
}


let save = (e) => {
  e.preventDefault()
  console.log(formState);
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