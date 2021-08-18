export default function Company({company:{company, catchPhrase, bs}}) {
  return (
    <div>
      <p> company: {company} </p>
      <p> catchPhrase: {catchPhrase}</p>
      <p> bs: {bs}</p>

    </div>
  );
}