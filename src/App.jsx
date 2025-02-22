import React from 'react';
import logo from './assets/logo.svg';

const App = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      <img src={logo} alt="logo" className="px-4 py-8 md:py-16" />
    </div>
  );
};

export default App;
