import './assets/styles/core.scss';
import logo from './assets/images/logo.png';
import BeerList from './components/BeerList';
import { useDispatch } from 'react-redux';
import { fetchBeers } from './components/beerSlice';
import {useEffect} from 'react';

  
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="header">
        <div className="content">
          <h1 className="h2">
            <img src={logo} className="logo" alt="15 Gifts" />
            Beers
          </h1>
        </div>
      </header>
      <div className="main-content">
        <BeerList />
      </div>
    </div>
  );
}

export default App;
