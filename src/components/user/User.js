import {useEffect, useState} from "react";
import {getPostsOfUsers} from "../../services/user.axios.servise";
import Posts from "../posts/Posts";

export default function User({item: userItem}) {

    let [posts, setPosts] = useState([])
  useEffect(() => {                                                         //ассинхронная ф-ция
    getPostsOfUsers(userItem.id).then(({data}) => setPosts([...data]))
  }, [userItem.id]) // указывать массив не обязательно

  return (
    <div>
      <p> {userItem.id} {userItem.name} </p>
      {/*<p> {userItem.username} </p>*/}
      {/*<p> {userItem.email} </p>*/}
      {/*{userItem.address}*/}
      {/*<p>  {userItem.phone} </p>*/}
        <Posts items={posts}/>
      {/*  <Posts items={posts}/>*/}
      {/*{userItem.website}*/}
      {/*{userItem.company}*/}

    </div>
  );
}