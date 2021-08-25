export default function Comment({item, choseComment}) {
   const onClickComment = () => {
       choseComment(item)
   }

  return (
    <div>
        {item.id} - {item.name}
      <button onClick={onClickComment}>details</button>
    </div>
  );
}