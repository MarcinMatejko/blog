import React, { useContext, useEffect } from 'react';
import { Post } from './Post';

import { GlobalContext } from '../context/GlobalState';

export const BlogList = () => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  return (
    <div>
      <h3>Wszystkie posty</h3>
      <ul>
        {posts.map(post => (<Post key={post.id} post={post}/>))}
        
      </ul>
    </div>
  )
}
