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
      {/*{item.name} - <Link to={{pathname: '/users/' + item.id, state: item}}>user static details</Link>*/}
      {/*{item.name} - <Link to={{pathname: '/users/' + item.id}}>user static details</Link>*/}
      {item.name} - <button onClick={navigate}>user static details programmatically</button>

    </div>
  );
}