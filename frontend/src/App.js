import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import {
  BrowserRouter,
} from 'react-router-dom';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;