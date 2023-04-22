import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Post.css';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = 'http://localhost:3001/v1/api/posts';

    try {
      const response = await axios.get(URL);
      setPostData(response.data);
    } catch (e) {
      setError('Error: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (loading) {
    return (
      <>
        <p>Data Here: {JSON.stringify(postData)}</p>
        <h3 className="text-center p-4"> Loading... </h3>
      </>
    );
  }

  return (
    <>
      <h2 className="p-4 font-bold display-4">All Posts</h2>
      <div className="container align-center">
        {postData.map((post) => {
          return (
            <div className="row top" key={post.id}>
              <div className="col-sm-6 py-3 top">
                <div className="card width-m py-2 top post-card">
                  <div className="card-body">
                    <h3 className="font-bold card-title top">{post.title}</h3>
                    <p className="card-text">{post.content}</p>
                    <img
                      className="img"
                      src="https://www.publicdomainpictures.net/pictures/190000/velka/blog-card.jpg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
