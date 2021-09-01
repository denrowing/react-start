import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../servisec/user.api";
import StaticUserDetails from "./StaticUserDetails";
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function Users(props) {
  let {match:{url}, history} = props
  let [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchData() {
      let usersList = await getUsers()
      setUsers([...usersList])
    }
    fetchData()
    // getUsers().then(value => setUsers([...value]))
  }, [])

  return (
    <div>
      {users.map(value => <User history={history} key={value.id} item={value}/>)}
      {/*<Route path={`${url}/:id`} render={(props) => {*/}
      {/*  console.log(props); // history location match*/}
      {/*  return <StaticUserDetails {...props}/>*/}
      {/*}}/>*/}
      <Route path={`${url}/:id`} render={(props) => {
        console.log(props); // history location match
        return <UserDetails {...props}/>
      }}/>
    </div>
  );
}