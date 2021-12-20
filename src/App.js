// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
          <header className="App-header">
            <Nav />
          </header>
          <Switch> 

            <Route path="/" exact>
              <ItemListContainer />
            </Route>

            <Route path="/categoria/:categoriaId">
              <ItemListContainer />
            </Route>

            <Route path="/producto/:id">
              <ItemDetailContainer />
            </Route>
            

          </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
