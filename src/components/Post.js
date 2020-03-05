import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Post = ({ post }) => {
  const { deletePost } = useContext(GlobalContext);
  return (
    <div>
      <h4>{post.title}<span><button onClick={() => deletePost(post._id)}>x</button></span></h4>
      <p>{post.text}</p>
    </div>
  )
}
