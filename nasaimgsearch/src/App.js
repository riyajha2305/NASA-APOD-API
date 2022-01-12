import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NasaPhotos from './components/NasaPhotos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes className='app'>
        <Route exact path="/" element={<Home />} />
        <Route path='/nasaphotos' element={<NasaPhotos />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
