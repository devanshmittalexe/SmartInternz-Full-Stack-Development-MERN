import React from 'react';
import TextUpdater from './components/TextUpdater';
import SimpleForm from './components/SimpleForm';
import UserCard from './components/UserCard';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">React.js Assignment</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Text Updater Component</h2>
          <TextUpdater />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Simple Form Component</h2>
          <SimpleForm />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">3. User Card Component</h2>
          <UserCard name="Devansh Mittal" email="devansh.mittal2021@vitbhopal.ac.in" />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Button Component</h2>
          <Button />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">5. Login Form Component</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

export default App;

