// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [nombre, useNombre] = useState ('Funcionaaaa')

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
