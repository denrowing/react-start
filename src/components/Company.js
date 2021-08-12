export default function Company(props) {
  let {name, catchPhrase, bs} = props
  return (
    <div className={'company'}>
      <p>name: {name}</p>
      <p>catchPhrase: {catchPhrase}</p>
      <p>bs: {bs}</p>
    </div>
  );
}