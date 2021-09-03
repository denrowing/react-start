import {useEffect, useState} from "react";
import {getPosts} from "../../servisec/post.api";
import Post from "./Post";
import {Route} from "react-router-dom";
import StaticUserDetails from "../users/StaticUserDetails";

export default function Posts() {
    // let {match:{url}} = props
    let [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            let usersPosts = await getPosts()
            setPosts([...usersPosts])
        }
        fetchPosts()
    })
  return (

    <div>
        {
            posts.map(value => <Post key={value.id} item={value}/>)
        }


    </div>
  );
}