import React from 'react';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="space-y-4 space-x-2">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button Clicked')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button Clicked')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large Button Clicked')}>
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default About;