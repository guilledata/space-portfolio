// import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomeScreen } from '../home/HomeScreen';
import { BlogScreen } from '../blog/BlogScreen';
import { AboutMeScreen } from '../aboutme/AboutMeScreen';
import { ProjectsScreen } from '../projects/ProjectsScreen';
import { ContactScreen } from '../contact/ContactScreen';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
    return (
    <BrowserRouter>
    
        {/* Add my custom navbar component */}
        <Navbar />

        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
            <Route path="/blog" element={<BlogScreen />} />
            <Route path="/aboutme" element={<AboutMeScreen/>} />
        </Routes>
    </BrowserRouter>
    )
}
