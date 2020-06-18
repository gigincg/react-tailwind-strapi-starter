import React from 'react';
import { useRoutes } from 'hookrouter'

import Nav from './components/Nav';
import Home from './components/Home';

const routes = {
  '/': () => <Home />,
};

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      {useRoutes(routes)}
    </div>
  );
}

export default App;