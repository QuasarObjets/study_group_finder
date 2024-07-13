import React from 'react';
import { View, Text } from 'react-native';
import GroupList from './components/GroupList';

const App: React.FC = () => {
  return (
    <View>
      <Text>Welcome to GroupFinder!</Text>
      <GroupList />
    </View>
  );
};

export default App;