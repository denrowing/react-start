import User from "./User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

export default function Users() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(value => setUsers([...value]))
  }, [])


  return (
    <div>
      {
        users.map((userItem) => <User key={userItem.id} item={userItem}/>)
      }

    </div>
  );
}