import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


function App() {
  const [posts, setPosts] = useState([]);
  const initialFormState = {
     type: "Text",
     content: "",
  }
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([
      formData,
      ...posts,
    ])
    setFormData({...initialFormState})
  }

  const handleDelete = (idToDelete) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post, index) => index !== idToDelete)
    );
  };

  return (
    <div className="App">
      <PostCreate 
        initialFormState={initialFormState}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PostList 
        posts={posts}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
