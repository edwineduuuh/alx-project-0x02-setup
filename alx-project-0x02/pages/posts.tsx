import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-8">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;