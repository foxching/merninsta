import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-filled"
      style={{
        maxWidth: "500px",
        padding: "20px",
        margin: "10px auto",
        textAlign: "center"
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className="btn  blue darken-1">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button class="btn waves-effect waves-light blue darken-1" type="submit">
        Login
      </button>
    </div>
  );
};

export default CreatePost;