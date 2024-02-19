import { Box } from "./component/Box";
import NavTop from "./component/NavTop";
import Footer from "./component/Footer";
import {  Routes, Route } from 'react-router-dom';
import { lazy } from "react";

// lazy import to improve load speed
// const Home = lazy(() => import('./page/Home'));
// const Project = lazy(() => import('./page/Project'));
import Home from "./page/Home";
import Project from "./page/Project";

export const Layout = () => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        
        <NavTop />
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        <Footer />
    </Box>
);