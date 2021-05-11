import React, { useState } from "react";

const CreateProfile = ({ setUser }) => {
  const [newUser, setNewUser] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <form>
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
        <textarea name="bio" id="bio" type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default CreateProfile;
