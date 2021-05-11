// 1) compare match.params.id with robot.id using find
//2) send the message first
//3) receve an automated message after 1sec(1000)
//4) repete steps 2 and 3
//5)

const Chat = ({ user, favourites, match }) => {
  return (
    <div>
      <h1>Chat </h1>
      {favourites
        .filter((robot) => robot.id === Number(match.params.id))
        .map((item) => (
          <div>{item.name}</div>
        ))}
    </div>
  );
};

export default Chat;
