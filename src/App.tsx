import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import FuelsPage from './pages/FuelsPage';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SteamBoilerPage from './pages/products/SteamBoilerPage';
import HotAirGeneratorPage from './pages/products/HotAirGeneratorPage';
import ElectricHotWaterPage from './pages/products/ElectricHotWaterPage';
import SteamGeneratorPage from './pages/products/SteamGeneratorPage';
import ThermicFluidPage from './pages/products/ThermicFluidPage';
import HotWaterGeneratorPage from './pages/products/HotWaterGeneratorPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/steam-boilers" element={<SteamBoilerPage />} />
            <Route path="/products/hot-air-generators" element={<HotAirGeneratorPage />} />
            <Route path="/products/electric-hot-water" element={<ElectricHotWaterPage />} />
            <Route path="/products/steam-generators" element={<SteamGeneratorPage />} />
            <Route path="/products/thermic-fluid" element={<ThermicFluidPage />} />
            <Route path="/products/hot-water-generators" element={<HotWaterGeneratorPage />} />
            <Route path="/biomass-fuels" element={<FuelsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;