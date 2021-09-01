import Company from "./Company";
import Address from "./Address";


export default function User({item: userItem}) {
    let {address, company} = userItem

    return (
        <div>
            <p>id: {userItem.id}</p>
            <p>name: {userItem.name}</p>
            <p>username: {userItem.username}</p>
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
