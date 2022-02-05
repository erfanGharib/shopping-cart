import './App.css';
import './tailwind.css';
import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='w-full flex'>
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
