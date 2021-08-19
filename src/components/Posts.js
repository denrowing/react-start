import {useEffect, useState} from "react";
import {getPostsOfUsers} from "../services/posts.service";
import Post from "./Post";

export default function Posts() {

  let [posts, setPosts] = useState([])
  useEffect(() => {
    getPostsOfUsers().then(value => setPosts([...value]))
  }, [])

  return (
    <div>
      <div>
        {
          posts.map(value => <Post key={value.id} item={value}/>)
        }
      </div>
      <div> </div>
    </div>
  );
}