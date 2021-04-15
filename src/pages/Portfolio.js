import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
// import UnderConstruction from '../components/underConstruction/UnderConstruction';

const Portfolio = () => {
    return (
        <div className="portFolio">
            <Navigation />
            <div className="portFolioContent">
                {/* <UnderConstruction /> */}
                <ProjectList />
            </div>
        </div>
    );
};

export default Portfolio;