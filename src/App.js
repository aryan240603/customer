import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import ResponsiveMenu from "./components/menu";
import SpecialOffers from "./components/specialoffers";
import NoPage from "./components/nopage";
import ContactCard from "./components/contact";
import { motion } from "framer-motion"


function App() {
  return (
    <div className="App">
    <Navbar />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<ResponsiveMenu />} />
          <Route path="/Special Offers" element={<SpecialOffers />} />
          <Route path="/contact" element={<ContactCard />} />
          <Route path="*" element={<NoPage />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
