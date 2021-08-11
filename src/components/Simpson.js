export default function Simpson({name, surname, age, info, photo}) {
    // let {name, surname, age, info, photo} = props
  return (
    <div className="Simpsons">
        <h2>name: {name}</h2>
        <p>surname: {surname}</p>
        <p>age: {age}</p>
        <p>info: {info}</p>
        <img src={photo} alt=""/>
    </div>
  );
}