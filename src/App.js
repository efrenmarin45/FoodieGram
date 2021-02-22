import './App.css';
import React, {useState} from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState('');

  if(!user){
    return <Login setUser={setUser} />
  }

  return (
    <h1>
      FoodieGram
    </h1>
  );
}

export default App;
