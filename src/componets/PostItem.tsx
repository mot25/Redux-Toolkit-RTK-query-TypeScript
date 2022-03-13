import React, { FC, MouseEvent } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostServices";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const handleUpdate = (e: MouseEvent) => {
    e.stopPropagation();
    const title = prompt("title edit") || "";
    updatePost({ ...post, title });
  };
  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    deletePost(post.id);
  };
  return (
    <div>
      <button onClick={handleUpdate}>update</button>
      <div className="post">
        {post.id}. title = {post.title}
        <button onClick={handleRemove}>delete</button>
      </div>
    </div>
  );
};

export default PostItem;
