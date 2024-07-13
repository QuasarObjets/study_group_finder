// File: /mi-app-estudio/app-movil/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;