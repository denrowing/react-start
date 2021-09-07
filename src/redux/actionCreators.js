import  {ADD_USER, LOAD_USERS} from "./actions";

const loadUsers = (payload) => {
  return {type: LOAD_USERS, payload}
}

const addUser = (payload) => {
  return {type: ADD_USER, payload}
}

export {loadUsers, addUser}