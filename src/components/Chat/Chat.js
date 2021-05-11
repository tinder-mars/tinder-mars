// 1) when a user submits a message  we add message to messages aray for that favourite
//2) a random message from the robot will be added to the messsages aray from that favourite
//3) repete steps one and two
//4)
//5)

import { useState } from "react";

const Chat = ({ user, favourites, match, setFavourites }) => {
  const [currentMessage, setCurrentMessage] = useState({
    currentMessage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentMessage({ profile_image: user.profile_image, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code below adds a user message
    let newFavouritesList = favourites.map((item) =>
      item.id === Number(match.params.id)
        ? {
            ...item,
            messages: [
              ...item.messages,
              currentMessage,
              {
                profile_image: item.profile_image,
                currentMessage: "hello mars",
              },
            ],
          }
        : item
    );

    setCurrentMessage({ currentMessage: "" });
    setFavourites(newFavouritesList);
  };
  return (
    <div>
      <h1>Chat </h1>
      {favourites
        .filter((robot) => robot.id === Number(match.params.id))
        .map((item) => (
          <div>
            <h1>{item.name}</h1>
            {item.messages.map((message) => (
              <div>
                <h1>{message.currentMessage}</h1>
                <img src={message.profile_image} alt="Profile image" />
              </div>
            ))}
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <textarea
          name="currentMessage"
          id="currentMessage"
          placeholder="type in message"
          value={currentMessage.currentMessage}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Chat;
