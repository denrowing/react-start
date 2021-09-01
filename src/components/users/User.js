import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"

export default function User({item, history}) {
  let navigate = () => {
    history.push('/users/' + item.id)
  }
  return (
    <div>
      {/*{item.name} - <Link to={{pathname: '/users/' + item.id, state: item}}>users static details</Link>*/}
      {/*{item.name} - <Link to={{pathname: '/users/' + item.id}}>users static details</Link>*/}
      {item.name} - <button onClick={navigate}>user static details programmatically</button>

    </div>
  );
}