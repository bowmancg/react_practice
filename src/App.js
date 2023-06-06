import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./components/Navbar";
import './App.css';
import ReactCard from './components/ReactCard';
import ReactForm from './components/ReactForm';

function App() {
  const [cards, setCards] = useState([
    {
      title: 'React 1',
      date: new Date(2021, 2, 20)
    },
    {
      title: 'React 2',
      date: new Date(2021, 5, 12)
    }
  ])
  const handleFormSubmit = (formData) => {
    // example of spreading
    const newCards = [...cards]
    newCards.push(formData)
    setCards(newCards)
  }
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="App-header">
        <ReactForm onSubmit={handleFormSubmit}/>
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
        <div className='row mt-3'>
          {cards.map((card, i) => <ReactCard key={i} { ...card}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
