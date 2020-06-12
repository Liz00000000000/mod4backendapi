import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  fetch('http://localhost:3000/users').then(res => res.json()).then(users => console.log(users))

  fetch('http://localhost:3000/posts').then(res => res.json()).then(posts => console.log(posts))
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
