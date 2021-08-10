import Geo from "./Geo";

export default function Address(props) {
  let {street, suite, city, zipcode, geo} = props
  return (
    <div className={'addresses'}>
        <div className={'address1'}>
           <p>street: {street},</p>
           <p>suite: {suite},</p>
           <p>city: {city},</p>
           <p>zipcode: {zipcode},</p>
           <p>geo: {geo}</p>
              <Geo lat={'-37.3159'} lng={'81.1496'}/>
              <Geo lat={'-43.9509'} lng={'-34.4618'}/>
        </div>

    </div>
  );
}