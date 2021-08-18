export default function Company({company:{name, catchPhrase, bs}}) {
  return (
    <div>
      <p> Company: </p>
      <p> Name - {name}</p>
      <p> Visio - {catchPhrase}</p>
      <p> bs: {bs}</p>

    </div>
  );
}