import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Descrpition" },
    { id: 2, title: "Javascript 2", body: "Descrpition" },
    { id: 3, title: "Javascript 3", body: "Descrpition" },
  ]);

  const [title, setTitle] = useState("");
  const [post, setPost] = useState({title: "", body: ""});
  

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts((prev) => [...prev, {...post, id: Date.now()}]);

    setPost({title: "", body: ""})
    
  };
  return (
    <div className="App">
      <form>
        {/* Управляемый копмонент после его двустороннего связывания */}
        <MyInput
          type="text"
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          placeholder="Название поста"
        />
        <MyInput
          type="text"
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          placeholder="Описание поста"
        />
        {/* так просто передавать и получать пропсы можно только с булевыми пропсами, типа disabled, required, checked... */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов 1"} />
    </div>
  );
}

export default App;
