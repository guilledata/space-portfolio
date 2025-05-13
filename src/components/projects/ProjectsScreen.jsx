import React, { useEffect } from 'react'
import './projects-style.css'

export const ProjectsScreen = () => {
    useEffect(() => {
        const starsContainer = document.querySelector('.stars-container');
        // Create stars
        for(let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            starsContainer.appendChild(star);
        }
    }, []);

    return (
        <div className="projects-screen">
            <div className="stars-container"></div>
            <h1>My Projects</h1>
        </div>
    )
}

