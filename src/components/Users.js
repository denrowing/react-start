import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/users.api";

export default function Users() {
  let [users, setUsers] = useState([])
useEffect(() => {
 // getUsers().then(value => setUsers([...value]))
  async  function fetchData() {
    let userList = await getUsers()
    setUsers([...userList])
  }
  fetchData()
}, [])
  return (
    <div>
      {
        users.map(value => <User key={value.id} item={value}/>)
      }

    </div>
  );
}