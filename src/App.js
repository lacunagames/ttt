import './assets/styles/core.scss';
import logo from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="content">
          <h2>
            <img src={logo} className="logo" alt="15 Gifts" />
            Beers
          </h2>
        </div>
      </header>
      <div className="main-content"></div>
    </div>
  );
}

export default App;
