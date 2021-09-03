import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import StaticUserDetails from "../users/StaticUserDetails";

export default function Post({item}) {
  return (
    <div>
        <br/>
        id: {item.id}
        {item.title}
        <Router>
            <div>
                <Link to={{pathname: '/posts/' + item.id, state: item}}>post details</Link>
            </div>
            <Route path={'/posts/' + item.id}
                   render={(props) => {
                       // console.log(props);
                       return <StaticUserDetails {...props}/>
                   }}
            />
            <hr/>
        </Router>


    </div>
  );
}