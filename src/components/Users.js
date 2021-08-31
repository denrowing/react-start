import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/users.api";
import StaticUserDetails from "./StaticUserDetails";
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function Users(props) {
  let {match: {url}} = props
  let [users, setUsers] = useState([])
useEffect(() => {
 getUsers().then(value => setUsers([...value]))
 //  async  function fetchData() {
 //    let userList = await getUsers()
 //    setUsers([...userList])
 //  }
 //  fetchData()
}, [])
  return (
    <div>
      {
        users.map(value => <User key={value.id} item={value}/>)
      }
      {/*<Route path={`${url}/:id`} render={(props) => {*/}
      {/*  return <StaticUserDetails{...props}/>*/}
      {/*}}/>*/}
      <Route path={`${url}/:id`} render={(props) => {
        return <UserDetails {...props}/>
      }}/>
    </div>
  );
}