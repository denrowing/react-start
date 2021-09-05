import {useDispatch, useSelector} from "react-redux";

const SomeComponent = () => {
  const counters = useSelector(({counterValue}) => counterValue)
    const dispatch = useDispatch()

  return (
      <header>
        <h1>{counters}</h1>
        <button onClick={() => {
            dispatch({type: 'INC A'})
        }}>inc A</button>
          <button onClick={() => {
              dispatch({type: 'DEC A'})
          }}>dec A</button>
          <button onClick={() => {
              dispatch({type: 'INC B'})
          }}>inc B</button>
          <button onClick={() => {
              dispatch({type: 'DEC B'})
          }}>dec B</button>
          <button onClick={() => {
              dispatch({type: 'INC C'})
          }}>inc C</button>
          <button onClick={() => {
              dispatch({type: 'DEC C'})
          }}>dec C</button>
      </header>
  )
}

export default function App() {

  return (
    <div>
      <SomeComponent/>

    </div>
  );
}

// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer