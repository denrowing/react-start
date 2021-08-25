import './Comments.css'
import Comment from "./Comment";
import {useEffect, useState} from "react";
import {getComments} from "../services/comments.fetch";

export default function Comments() {
    let [comments, setComments] = useState([])
    let [comment, setComment] = useState(null)

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    const choseComment = (u) => {
        setComment({...u})
    }

  return (
    <div className={'wrap'}>
        <div className={'comments-box'}>
            {
                comments.map(value =>
                    <Comment
                        key={value.id}
                        item={value}
                        choseComment={choseComment}
                    />)
            }

        </div>

        {comment && <div className={'chosen-one'}>
          {JSON.stringify(comment.body)}
      </div>}
    </div>
  );
}