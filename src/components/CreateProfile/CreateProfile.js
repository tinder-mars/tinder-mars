import React, { useState } from "react";
import uploadimage from "../assets/uploadimage.svg";

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
    <div>
      <h1>Create Profile</h1>
      {isImageFormDisplayed ? (
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            name="profile_image"
            id="profile_image"
            type="text"
            onChange={handleChange}
          />
          <button onClick={() => setIsImageFormDisplayed(false)}>
            Confirm
          </button>
        </div>
      ) : (
        <img
          src={newUser.profile_image}
          alt="image"
          onClick={() => setIsImageFormDisplayed(true)}
          height="80"
        />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input name="name" id="name" type="text" onChange={handleChange} />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input name="age" id="age" type="number" onChange={handleChange} />
        <br />
        <label htmlFor="location">Location</label>
        <br />
        <input
          name="location"
          id="location"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="bio">Bio</label>
        <br />
        <textarea name="bio" id="bio" onChange={handleChange} />
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateProfile;
