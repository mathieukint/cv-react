import React from 'react';
import ProjectList from '../components/portfolio/ProjectList';
import Navigation from '../components/Navigation';
// import UnderConstruction from '../components/underConstruction/UnderConstruction';

const Portfolio = () => {
    return (
        <div className="portFolio">
            <Navigation />
            <div className="portfolioContent">
                <ProjectList />
            </div>
        </div>
    );
};

export default Portfolio;