import React, { useState } from "react";
import axios from "axios";
import './CreatePost.css'

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:3001/v1/api/posts";

    try {
      const response = await axios.post(URL, { title, content, image });
      console.log(response.data);
    } catch (e) {
      setError("Error: " + e.message);
    }
  };

  return (
    <>
      <main>
        <h1 data-testid="create">Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter a title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">
              Blog Content:
              </label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your post here"
              rows="8"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">
              Image URL:
              </label>
            <input
              type="url"
              id="image"
              name="image"
              className="form-control"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Enter an image URL"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </main>

    </>
  );
};

export default CreatePage;
