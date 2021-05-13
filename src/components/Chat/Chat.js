import "./chat.css";
import { useState } from "react";
import matchchat from "../assets/matchchat.svg";
import RedArrowLeft from "../assets/RedArrowLeft.svg";
import { Link } from "react-router-dom";

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
                robotMessage: Math.random().toString(36).substring(7),
              },
            ],
          }
        : item
    );

    setCurrentMessage({ currentMessage: "" });
    setFavourites(newFavouritesList);
  };
  return (
    <div className="chat-container">
      <Link to="/matchlist" className="chat-left-arrow">
        <img
          className="chat-left-arrow-img"
          src={RedArrowLeft}
          alt="Go back to match list"
        />
      </Link>
      <div className="chat-matchchat-container">
        <img src={matchchat} alt="Match chat" className="chat-matchchat-img" />
      </div>
      {favourites
        .filter((robot) => robot.id === Number(match.params.id))
        .map((item) => (
          <div key={item.id} className="chat-bubbles">
            {item.messages.map((message, index) => {
              return index % 2 === 0 ? (
                <div key={index} className="chat-bubbles-container">
                  <div className="chat-bubbles-profile-image">
                    <img src={message.profile_image} alt="Profile" />
                  </div>
                  <div className="chat-bubbles-profile-current-message chat-bubbles-profile-current-message-user">
                    <h1>{message.currentMessage}</h1>
                  </div>
                </div>
              ) : (
                <div key={index} className="chat-bubbles-container-robot">
                  <div className="chat-bubbles-profile-image">
                    <img src={message.profile_image} alt="Profile" />
                  </div>
                  <div className="chat-bubbles-profile-current-message chat-bubbles-profile-current-message-robot">
                    <h1>{message.robotMessage}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      <div className="chat-form">
        <form onSubmit={handleSubmit}>
          <textarea
            className="chat-form-textarea"
            name="currentMessage"
            id="currentMessage"
            placeholder="type in message"
            value={currentMessage.currentMessage}
            onChange={handleChange}
          />
          <br />
          <button
            disabled={currentMessage.currentMessage === "" ? true : false}
            className="chat-form-button"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
