import React from "react";
import { useState } from "react";

// Removed `void` type from React.FC as it's not necessary.
const Form: React.FC = () => {
  // Corrected initial value for age to "" (string) instead of 0 to allow input change to work properly.
  const [obj, setObj] = useState({
    name: "",
    age: "", // Age should be a string initially to handle form input properly.
    email: "",
    completed: false,
  });

  // Added `React.FormEvent` type to the `handleSubmit` event.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(obj);
  }

  // Added `React.ChangeEvent<HTMLInputElement>` type to the `handleChange` event.
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setObj({ ...obj, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Added proper closing tags for form and input */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={obj.name}
          onChange={handleChange}
        />

        {/* Added inputs for age and email */}
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={obj.age}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={obj.email}
          onChange={handleChange}
        />

        {/* Added checkbox for completed */}
        <label htmlFor="completed">Completed:</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={obj.completed}
          onChange={handleChange} // Fixed the syntax
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
