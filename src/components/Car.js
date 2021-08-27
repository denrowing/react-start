export default function Car({car}) {
  return (
    <div>
    id: {car.id}
      <br/>
      model: {car.model}
      <br/>
      price: {car.price}
      <br/>
      year: {car.year}
      <hr/>

    </div>
  );
}