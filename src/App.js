import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Menu from './Components/Menu.js';
import Footer from './Components/Footer';

import Content from './Components/Content.js';
import NewsContent from './Components/NewsContent.js';
import RegionContent from './Components/RegionContent';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />
        <Route path='/index' render={() => <Content />} />
        <Route path='/news' render={() => <NewsContent />} />
        <Route path='/region' render={() => <RegionContent />} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
