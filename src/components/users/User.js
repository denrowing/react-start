import Address from "./Address";
import Company from "./Company";

export default function User({item}) {
  return (
    <div>
      id: {item.id} <br/>
      name: {item.name} <br/>
      username: {item.username} <br/>
      email: {item.email} <br/>
      <Address/> <br/>
      {item.phone} <br/>
      {item.website} <br/>
      <Company/> <br/>


    </div>
  );
}