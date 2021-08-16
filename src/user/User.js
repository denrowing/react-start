export default function User({item: userItem, address}) {
  return (
    <div>
      {userItem.id + '</br>'}
      {userItem.name}
      {userItem.username}
      {userItem.email}

    </div>
  );
}