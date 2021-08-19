export default function User({item, choseUser, chosePosts}) {

  const onClickUserChose = () => {
      chosePosts(item)
  }
    const onClickPostsChose = () => {
        choseUser(item)
    }

  return (
    <div>
      {item.id} {item.name}
      <button onClick={onClickPostsChose}>details</button>

    </div>
  );
}