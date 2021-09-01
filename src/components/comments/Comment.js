export default function Comment({item}) {
  return (
    <div>
      postId: {item.postId} <br/>
      id: {item.id} <br/>
      name: {item.name} <br/>
      email: {item.email} <br/>
      body: {item.body} <br/> <hr/>
    </div>
  );
}