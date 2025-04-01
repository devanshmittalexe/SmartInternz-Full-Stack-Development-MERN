import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="mb-6 p-6 bg-white border rounded-lg shadow-md max-w-sm">
      <h2 className="text-xl font-bold mb-3">User Card</h2>
      <div className="flex flex-col">
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {email}
        </div>
      </div>
    </div>
  );
};

export default UserCard;