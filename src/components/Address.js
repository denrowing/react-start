import Geo from "./Geo";

export default function Address({address: {street, suite, city, zipcode, geo}}) {
  return (
    <div>
      City - {city} Street - {street}  Suite - {suite} Zipcode - {zipcode}
      <Geo location={geo}/>

    </div>
  );
}