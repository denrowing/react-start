export default function Post({item}) {
  return (
    <div>
    userId: {item.userId} <br/>
      id: {item.id} <br/>
      title: {item.title} <br/>
      body: {item.body} <br/>
      <hr/>
    </div>
  );
}