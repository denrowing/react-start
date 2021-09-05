import {useSelector, useDispatch} from "react-redux";

const SomeComponent = () => {
  const stateCounter = useSelector(({counterValue}) => counterValue)

  return (
      <header>
        <h1>{stateCounter}</h1>
      </header>

  )
}

export default function App() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {
            dispatch({type: 'INCREASE'})
        }}>inc</button>
        <button onClick={() => {
            dispatch({type: 'DECREASE'})
        }}>dic</button>
    <SomeComponent/>

    </div>
  );
}


// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer



