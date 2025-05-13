// import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { PortfolioApp } from './PortfolioApp'
import './index.css';

const mainContainer = document.getElementById('root');


const root = createRoot(mainContainer);

root.render(
    <PortfolioApp />,
);


