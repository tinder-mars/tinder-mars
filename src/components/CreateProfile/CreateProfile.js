import React, { useState } from "react";

const CreateProfile = ({ setUser, history }) => {
  const defaultNewUser = {
    name: "",
    age: "",
    location: "",
    bio: "",
  };

  const [newUser, setNewUser] = useState(defaultNewUser);

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
