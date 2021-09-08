import {useEffect} from "react";
import {addUser, loadUsers} from "./redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {addUserWithThunk, fetchUsersWithThunk} from "./services/services";

export default function App() {

  let state = useSelector(state => state)
  let dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchUsersWithThunk())
}, [])

  const xxx = (e) => {
    let user = {name: 'vasya'}
    dispatch(addUserWithThunk(user))
  }
  return (
    <div>
<button onClick={xxx}>save user</button>
      {state.users.map(val => <div>{val.name}</div>)}
    </div>
  );
}

// зробити форму з додаванням юзера і вивести user-ів з використанням redux як на лекції