import "./Users.css"
import {useEffect, useState} from "react";
import {getUsers} from "../services/users.fetch";
import User from "./User";


export default function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)
    let [posts, setPosts] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const choseUser = (u) => {
        setUser({...u})
    }

    const chosePosts = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
    }

  return (

    <div className={'wrap'}>
        <div className={'users-box'}>
      {
          users.map(value => <User
              key={value.id}
              item={value}
              choseUser={choseUser}
          />)
      }
        </div>

        {user && <div className={'chosen-one'}> {JSON.stringify(user.username)} </div>}
    </div>
  );
}