import React from 'react';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card 1" content="This is the content for Card 1." />
        <Card title="Card 2" content="This is the content for Card 2." />
        <Card title="Card 3" content="This is the content for Card 3." />
      </div>
    </div>
  );
};

export default Home;