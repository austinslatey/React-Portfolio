import React, { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName, email, message);

    alert(`Hello. Click the mail icon to email me or follow me on github! ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <form id="ContactForm" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            name="userName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={message}
            name="message"
            onChange={handleInputChange}
          >Hello click either the mail icon or follow me on github!</textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
