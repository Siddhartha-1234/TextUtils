import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpperClick = () => {
    // console.log("Upper Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("Tryed to Text Changed");
    setText(event.target.value);
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="12"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick}>
        Convert to UpperCase
      </button>
    </>
  );
}
