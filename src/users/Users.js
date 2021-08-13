import {usersList} from "../data-file";
import User from "../user/User";
import  {usersList} from "../data-file"

export default function Users() {
  return (
    <div>
        {
          usersList.map((userItem, index) => <User key={index}/>)
        }

    </div>
  );
}