import Navbar from "./Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Models from "./pages/Models"
import Portfolio from "./pages/Portfolio"
import "./App.css"

import { Route, Routes } from "react-router-dom"



function App() {
    return (
    <>
    <Navbar />
    <div ClassName="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About_us" element={<AboutUs />} />
            <Route path="/Contact_us" element={<ContactUs />} />
            <Route path="/Models" element={<Models />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
    </div>
    </>
 )
}

export default App 

