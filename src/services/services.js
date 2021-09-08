import {addUser, loadUsers} from "../redux/actionCreators";

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

export {fetchUsersWithThunk, addUserWithThunk}