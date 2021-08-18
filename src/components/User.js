import Address from "./Address";
import Company from "./Company";

export default function User({item: userItem}) {
   let  {address, company} = userItem
  return (
    <div>
      <h2> {userItem.id} {userItem.name} </h2>
      <p> username: {userItem.username} </p>
        <p> email: {userItem.email} </p>
        <p> Address: </p>
        <Address address={address}/>
        <Company company={company}/>
        <p> Phone: {userItem.phone} </p>
        <p> Website: {userItem.website} </p>

    </div>
  );
}