import {useEffect} from "react";
import {addUser, loadUsers} from "./redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const fetchUsersWithThunk = () => async (dispatch) => {
  let responce = await (await fetch('https://jsonplaceholder.typicode.com/users/')).json()
  // fetch('https://jsonplaceholder.typicode.com/users/')
  //     .then(value => value.json())
  dispatch(loadUsers(responce))

}

const addUserWithThunk = (payload) => async (dispatch) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: payload.name,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  let savedUser = await response.json()
  dispatch(addUser(savedUser))
}

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