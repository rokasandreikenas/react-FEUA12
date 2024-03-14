import { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((response) => setPosts(response.slice(0, 5)))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://api.meteo.lt/v1/places/vilnius/forecasts/long-term")
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
