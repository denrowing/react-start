import {useDispatch, useSelector} from "react-redux";

const SomeComponent = () => {
  const counter1 = useSelector(({a}) => a)
    const counter2 = useSelector(({b}) => b)
    const counter3 = useSelector(({a,b,c}) => c)
// console.log({counter1})

  return (
      <header>
          <div className={'wrap'}>
            <div className={'aCount'}>
              <h1>a: {counter1}</h1>
             </div>
            <div className={'bCount'}>
              <h1>b: {counter2}</h1>
            </div>
            <div className={'cCount'}>
              <h1>c: {counter3}</h1>
            </div>
          </div>
      </header>
  )
}

export default function App() {
    const dispatch = useDispatch()
  return (
    <div>
      <SomeComponent/>
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
    </div>
  );
}

// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer