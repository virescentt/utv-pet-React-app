import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Descrpition" },
    { id: 2, title: "Pauhi 2", body: "peroik" },
    { id: 3, title: "xlms,asd", body: "09823i" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPosts() {
    console.log("Функция отработала  ");
    if (selectedSort) {
      [...posts].sort((a, b) => a[selectedSort].localeCompare(selectedSort));
    }
    return posts;
  }

  // просто механизм сортировки
  const sortedPosts = getSortedPosts();

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sortValue) => {
    setSelectedSort(sortValue);
    console.log(sortValue);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
        {/* <select>
          <option disabled value="value1" key="">Сортировка</option>
          <option value="value1" key="">По названию</option>
          <option value="value1" key="">По описанию</option>
        </select> */}
      </div>
      {/* Условная отрисовка с помощью тернарного оператора.*/}
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title={"Список постов 1"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены</h1>
      )}
    </div>
  );
}

export default App;
