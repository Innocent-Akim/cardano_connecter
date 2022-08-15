import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Organisation from './pages/Organisation';
import Evenement from './pages/Evenement';
import Blog from './pages/Blog';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<div />} />
                <Route path='/home' element={<div />} />
                <Route path='/organisation' element={<Organisation />} />
                <Route path='/evenement' element={<Evenement />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>

        </BrowserRouter>
    )

}

export default App
