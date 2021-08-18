import Geo from "./Geo";

export default function Address({address:{city, street, suite, zipcode, geo}}) {
  return (
    <div>
      <p>City: {city} </p>
      <p>  Street: {street}</p>
      <p> suite: {suite}</p>
      <p> zipcode: {zipcode} </p>
      <Geo geo={geo}/>

    </div>
  );
}