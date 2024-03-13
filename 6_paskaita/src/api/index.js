export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export const fetchPostsThenWay = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((resp) =>
    resp.json()
  );
};
