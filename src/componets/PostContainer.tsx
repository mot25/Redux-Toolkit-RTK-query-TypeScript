import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostServices";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100);
  const [
    createPost,
    { isLoading: loadingPost, error: errorPost }
  ] = postAPI.useCreatePostMutation();
  const handleCreatePost = async () => {
    const title = prompt("title");
    await createPost({ title, author: title } as IPost);
  };
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>loading...</h1>}
        {error && <h1>error...</h1>}

        <button onClick={() => handleCreatePost()}>
          {loadingPost && <h1>loading...</h1>}
          {errorPost && <h1>error...</h1>}
          create post
        </button>
        {posts &&
          posts.map(post => {
            return <PostItem key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default PostContainer;
