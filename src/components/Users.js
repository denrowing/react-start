import User from "./User";
import {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import {getaxiosUsers} from "../services/user.axios.servise";

export default function Users() {
  let [users, setUsers] =  useState([]) // массив обьектов [users=[], setUsers()]

  useEffect(()=> {
          // getUsers().then(value => setUsers([...value]))
    getaxiosUsers().then(({data}) => setUsers([...data]))
  }, [])


  return (
    <div>
      {
          users.map((userItem, index) => <User key={index} item={userItem} />)
              // <div>
              //     {userItem.id}
              //     {userItem.name}
              //     {userItem.username}
              //     {userItem.email}
              //     {userItem.phone}
              //
              // </div>)

      }
    </div>
  );
}