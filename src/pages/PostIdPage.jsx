import React from "react";
import { useParams } from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();
  console.log(params);
  return <h1> Вы открыли пост</h1>;
};

export default PostIdPage;
