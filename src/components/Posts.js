import {useEffect, useState} from "react";
import {getPostsOfUser, getPostsOfUsers} from "../services/posts.service";
import Post from "./Post";

export default function Posts() {

  let [posts, setPosts] = useState([])
  useEffect(() => {
      getPostsOfUser().then(value => setPosts([...value]))
  }, [])

  return (
    <div>
      <div>
        {
          posts.map((value, index) => <Post key={index} item={value}/>)
        }
      </div>
      <div> </div>
    </div>
  );
}