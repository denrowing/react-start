import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.api";
import Post from "./Post";

export default function Posts() {
  let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
  return (
    <div>
        {
            posts.map(value => <Post key={value.id} item={value}/>)
        }

    </div>
  );
}