import React, { useState, useEffect } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the content for Card 1.' },
    { title: 'Card 2', content: 'This is the content for Card 2.' },
    { title: 'Card 3', content: 'This is the content for Card 3.' },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Load posts from localStorage after the component mounts
  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleAddPost = (title: string, content: string) => {
    const updatedPosts = [...posts, { title, content }];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Save posts to localStorage
  };

  useEffect(() => {
    // Save posts to localStorage whenever they change
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="p-8">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => setModalOpen(true)}
      >
        Add New Post
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;