export default function StaticUserDetails({location: {state}}) {
  // console.log(state);
  return (
    <div>
      userId: {JSON.stringify(state.userId)}
      <br/>
     body: {JSON.stringify(state.body)}

    </div>
  );
}