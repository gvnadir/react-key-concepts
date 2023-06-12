import classes from "./BlogPosts.module.css";

function BlogPosts({ posts }) {
  const postsList = posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  });

  return <ul classes={classes.list}>{postsList}</ul>;
}

export default BlogPosts;
