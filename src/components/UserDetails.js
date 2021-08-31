import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../services/users.api";

export default function UserDetails({history, match:{params:{id}}}) {  //
  // let {id: userId} = useParams('id')
  // console.log(id);
  // console.log(userId);

  let [user, setUser] = useState({})
  useEffect(() => {
    getUser(id).then(value => setUser({...value}))
  }, [id])

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}