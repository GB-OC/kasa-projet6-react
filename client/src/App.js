import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './components/NotFound';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import ListingDetail from './pages/ListingDetail/ListingDetail';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listing-detail/:id" element={<ListingDetail />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
