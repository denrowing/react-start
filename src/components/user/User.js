import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.service";
import Company from "./Company";
import Address from "./Address";


export default function User({item: userItem}) {
    let {address, company} = userItem
    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts(userItem.id).then(data => setPosts([...data]))
    }, [userItem.id])


  return (
    <div>
      <p>id: {userItem.id}</p>
      <p>name: {userItem.name}</p>
      <p>username: {userItem.username}</p>
        <Posts items={posts}/>
      <p>email: {userItem.email}</p>
      <p>address: </p>
      <Address address={address}/>
      <p>phone: {userItem.phone}</p>
      <p>website: {userItem.website}</p>
      <p>company:</p>
      <Company company={company}/>
        <hr/>
    </div>
  );
}
