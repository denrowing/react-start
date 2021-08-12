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
              <Geo lat={'-37.3159'} lng={'81.1496'}/>
              <Geo lat={'-43.9509'} lng={'-34.4618'}/>
              <Geo lat={'-68.6102'} lng={'-47.0653'}/>
              <Geo lat={'-29.4572'} lng={'-164.2990'}/>
              <Geo lat={'-31.8129'} lng={'62.5342'}/>
              <Geo lat={'-71.4197'} lng={'71.7478'}/>
              <Geo lat={'24.8918'} lng={'21.8984'}/>
              <Geo lat={'-14.3990'} lng={'-120.7677'}/>
              <Geo lat={'24.6463'} lng={'-168.8889'}/>
              <Geo lat={'-38.2386'} lng={'57.2232'}/>

        </div>

    </div>
  );
}