// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
// import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
