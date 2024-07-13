import React from 'react';

interface Group {
  name: string;
  description: string;
  members: string[];
}

interface GroupListProps {
  groups: Group[];
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  return (
    <div>
      <h2>Group List</h2>
      {groups.map((group, index) => (
        <div key={index}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <p>Members: {group.members.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default GroupList;