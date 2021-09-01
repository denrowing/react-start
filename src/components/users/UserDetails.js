import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../servisec/user.api";

export default function UserDetails({history, match:{params:{id}}}) { //
  // let {id: userId} = useParams('id')
  // console.log(id);
  // console.log(userId);
  // console.log(match);
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