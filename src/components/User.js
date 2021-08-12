import Address from "./Address";
import Company from "./Company";

export default function User(props) {
let {id, name, username, email, address, phone, website, company} = props
  return (
    <div className={'Users'}>
        <div className={'User1'}>
            <p>id: {id},</p>
            <p>name: {name},</p>
            <p>username: {username},</p>
            <p>email: {email},</p>
            <p>address: </p>
            <Address street={'Kulas Light'} suite={'Apt. 556'} city={'Gwenborough'} zipcode={'92998-3874'} />
            <Address street={'Victor Plains'} suite={'Suite 879'} city={'Wisokyburgh'} zipcode={'90566-7771'} geo={''}/>
            <Address street={'Douglas Extension'} suite={'Suite 847'} city={'McKenziehaven'} zipcode={'59590-4157'} geo={''}/>
            <Address street={'Hoeger Mall'} suite={'Apt. 692'} city={'South Elvis'} zipcode={'53919-4257'} geo={''}/>
            <Address street={'Skiles Walks'} suite={'Suite 351'} city={'Roscoeview'} zipcode={'33263'} geo={''}/>
            <Address street={'Norberto Crossing'} suite={'Apt. 950'} city={'South Christy'} zipcode={'23505-1337'} geo={''}/>
            <Address street={'Rex Trail'} suite={'Suite 280'} city={'Howemouth'} zipcode={'58804-1099'} geo={''}/>
            <Address street={'Ellsworth Summit'} suite={'Suite 729'} city={'Aliyaview'} zipcode={'45169'} geo={''}/>
            <Address street={'Dayna Park'} suite={'Suite 449'} city={'Bartholomebury'} zipcode={'76495-3109'} geo={''}/>
            <Address street={'Kattie Turnpike'} suite={'Suite 198'} city={'Lebsackbury'} zipcode={'31428-2261'} geo={''}/>

            <p>phone: {phone},</p>
            <p>website: {website},</p>
            <p>company: {company}</p>
            <Company name={'Romaguera-Crona'} catchPhrase={'Multi-layered client-server neural-net'} bs={'harness real-time e-markets'}/>
            <Company name={'Deckow-Crist'} catchPhrase={'Proactive didactic contingency'} bs={'synergize scalable supply-chains'}/>
            <Company name={'Romaguera-Jacobson'} catchPhrase={'Face to face bifurcated interface'} bs={'e-enable strategic applications'}/>
            <Company name={'Robel-Corkery'} catchPhrase={'Multi-tiered zero tolerance productivity'} bs={'transition cutting-edge web services'}/>
            <Company name={'Keebler LLC'} catchPhrase={'User-centric fault-tolerant solution'} bs={'revolutionize end-to-end systems'}/>
            <Company name={'Considine-Lockman'} catchPhrase={'Synchronised bottom-line interface'} bs={'e-enable innovative applications'}/>
            <Company name={'Johns Group'} catchPhrase={'Configurable multimedia task-force'} bs={'generate enterprise e-tailers'}/>
            <Company name={'Yost and Sons'} catchPhrase={'Implemented secondary concept'} bs={'e-enable extensible e-tailers'}/>
            <Company name={'Abernathy Group'} catchPhrase={'Switchable contextually-based project'} bs={'aggregate real-time technologies'}/>
            <Company name={'Hoeger LLC'} catchPhrase={'Centralized empowering task-force'} bs={'target end-to-end models'}/>

        </div>
    </div>
  );
}
