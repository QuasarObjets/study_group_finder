// File: /study_group_finder/web_app/src/pages/Home.tsx

import React from 'react';
import GroupList from '../components/GroupList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to GroupFinder!</h1>
      <GroupList />
    </div>
  );
};

export default Home;