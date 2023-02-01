import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';


const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App;