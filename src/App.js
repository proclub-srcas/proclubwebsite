import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Humans from "./components/Coordinates";
import Winners from "./components/Winners";
import Magazine from "./components/Magazine";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import Membership from "./components/Membership";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/join" element={<Join />} />
                    <Route path = "/Humans" element={<Humans/>}/>
                    <Route path="/Winners" element={<Winners />} />
                    <Route path="/Magazine" element={<Magazine />} />
                    <Route path="/membership" element={<Membership />} />
                </Routes>
            </PageTransition>
        </BrowserRouter>
    );
}

export default App;
