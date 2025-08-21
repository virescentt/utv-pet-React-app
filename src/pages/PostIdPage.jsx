import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  // объект со всеми динамическими значениями навигейта.
  // console.log(params)
  const [post, setPost] = useState({});
  const [comms, setComms] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  // забавно что вместо создания отдельного метода сервиса для комментов можно просто прописать аргумент вот так getById(id + '/comments'), и получится нужный адрес лол.
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getById(id + "/comments");
    console.log(response, response.data);
    setComms(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу с ID {params.id}, поздравляю.</h1>
      {error && (
        <>
          <br />
          <p>Произошла ошибка ${error}</p>
          <br />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии.</h2>
      {comError && (
        <>
          <br />
          <p>Произошла ошибка ${comError}</p>
          <br />
        </>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comms.map((com) => (
            <div style={{ marginTop: 15 }} key={com.id}>
              <h5>email: {com.email}</h5>
              <div>body: {com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
