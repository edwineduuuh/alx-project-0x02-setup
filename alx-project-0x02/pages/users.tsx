import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Users;