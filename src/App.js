import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./components/Navbar";
import './App.css';
import ReactCard from './components/ReactCard';

function App() {
  const cards = [
    {
      id: '1a',
      title: 'React 1',
      date: new Date(2021, 2, 20)
    },
    {
      id: '1b',
      title: 'React 2',
      date: new Date(2021, 5, 12)
    }
  ]
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='row'>
          <ReactCard 
          title={cards[0].title}
          date={cards[0].date}
          />
        </div>
        <div className='row'>
          <ReactCard 
          title={cards[1].title}
          date={cards[1].date}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
