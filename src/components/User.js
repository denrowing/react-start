import Address from "./Address";

export default function User(props) {
let {id, name, username, email, address, phone, website, company} = props
  return (
    <div className={'Users'}>
        <div className={'User1'}>
            <p>id: {id},</p>
            <p>name: {name},</p>
            <p>username: {username},</p>
            <p>email: {email},</p>
            <p>address: {address},</p>
            <Address street={'Kulas Light'} suite={'Apt. 556'} city={'Gwenborough'} zipcode={'92998-3874'} geo={''}/>
            <Address street={'Victor Plains'} suite={'Suite 879'} city={'Wisokyburgh'} zipcode={'90566-7771'} geo={''}/>
            <p>phone: {phone},</p>
            <p>website: {website},</p>
            <p>company: {company}</p>

        </div>
    </div>
  );
}
