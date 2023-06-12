import { useEffect, useState } from "react";
import BlogPosts from "./components/BlogPosts";
import NewPost from "./components/NewPost";

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postsData = await posts.json();
      setPosts(postsData);
    }

    fetchPost();
  }, []);

  return (
    <>
      <NewPost />
      <BlogPosts posts={posts} />
    </>
  );
}

export default App;
