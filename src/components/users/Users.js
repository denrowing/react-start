import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import {getAxiosUsers} from "../../services/user.axios.servise";


export default function Users() {

  let [users, setUsers] = useState([])

      // hook (где в имени ф-ции начинается с use...)
  useEffect(() => {
    // getUsers().then(value => setUsers([...value])) // fetch метод
  }, [])
        getAxiosUsers().then(({data}) => setUsers([...data]))
  return (
    <div>
        {
          users.map((userItem, index) => <User key={userItem.id} item={userItem} />)
        }

    </div>
  );
}