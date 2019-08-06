import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <FormField />
      <CoolButton />
      <section>
        <Signup />
      </section>
    </main>

    </>
  );
}

export default App;
