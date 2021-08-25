import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../services/posts.fetch";
import Post from "./Post";

export default function Posts() {
    let [posts, setPosts] = useState([])
    let [post, setPost] = useState(null)

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    const chosePost = (u) => {
        setPost({...u})
    }

  return (
    <div className={'wrap'}>
        <div className={'posts-box'}>
            {
                posts.map(value => <Post
                    key={value.id}
                    item={value}
                    chosePost={chosePost}
                />)
            }
        </div>

        {post &&
            ( <div className={'chosen-one'}> {JSON.stringify(post.body)}  </div>)
        }
    </div>
  );
}