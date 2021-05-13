import React, { useState } from "react";
import uploadimage from "../assets/uploadimage.svg";
import "./CreateProfile.css";

const CreateProfile = ({ setUser, history }) => {
  const defaultNewUser = {
    name: "",
    age: "",
    location: "",
    bio: "",
    profile_image: uploadimage,
  };

  const [newUser, setNewUser] = useState(defaultNewUser);
  const [isImageFormDisplayed, setIsImageFormDisplayed] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(newUser);
    setNewUser(defaultNewUser);
    history.push("/matchmaker");
  };

  return (
    <div className="create-profile-wrapper">
      <h1 className="create-profile-title">Create Profile</h1>
      {isImageFormDisplayed ? (
        <div>
          <label htmlFor="image" className="create-profile-label">
            Upload Image
          </label>
          <input
            name="profile_image"
            id="profile_image"
            type="text"
            onChange={handleChange}
            className="create-profile-input"
          />
          <button
            onClick={() => setIsImageFormDisplayed(false)}
            className="create-profile-button"
          >
            Confirm
          </button>
        </div>
      ) : (
        <img
          src={newUser.profile_image}
          alt="profile"
          onClick={() => setIsImageFormDisplayed(true)}
          height="80"
          className="create-profile-image"
        />
      )}

      <form onSubmit={handleSubmit} className="create-profile-form">
        <label htmlFor="name" className="create-profile-label">
          Name
        </label>
        <br />
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          className="create-profile-input"
        />
        <br />
        <label htmlFor="age" className="create-profile-label">
          Age
        </label>
        <br />
        <input
          name="age"
          id="age"
          type="number"
          onChange={handleChange}
          className="create-profile-input"
        />
        <br />
        <label htmlFor="location" className="create-profile-label">
          Location
        </label>
        <br />
        <input
          name="location"
          id="location"
          type="text"
          onChange={handleChange}
          className="create-profile-input"
        />
        <br />
        <label htmlFor="bio" className="create-profile-label">
          Bio
        </label>
        <br />
        <textarea
          name="bio"
          id="bio"
          onChange={handleChange}
          className="create-profile-textarea"
        />
        <br />
        <button type="submit" className="create-profile-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
