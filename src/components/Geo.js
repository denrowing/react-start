export default function Geo(props) {
  let {lat, lng} = props
  return (
    <div className={'geo'}>
      <p>lat: {lat},</p>
      <p>lng: {lng}</p>

    </div>
  );
}