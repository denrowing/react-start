import Geo from "./Geo";

export default function Address({address}) {
    let {geo} = address
  return (
    <div>
      street: {address.street} <br/>
      suite: {address.suite} <br/>
      city: {address.city} <br/>
      zipcode: {address.zipcode} <br/>
      <Geo geo={geo}/> <br/>

    </div>
  );
}