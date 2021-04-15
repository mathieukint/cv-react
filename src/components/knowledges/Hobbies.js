import React from 'react';

const Hobbies = () => {
    return (
            <div className="activities">
                <h3> Activités</h3>
                <div className="actList">
                    <ul>
                        <li><i id="actIcon" className="material-icons"> sports_kabaddi</i> Judo</li>
                        <li><i id="actIcon" className="fas fa-running"></i> Course à pied</li>
                        <li><i id="actIcon" className="fas fa-bicycle"></i> Cyclisme</li>
                        <li><i id="actIcon" className="fas fa-basketball-ball"></i> Basketball</li>
                    </ul>
                    <ul>
                        <li><i id="actIcon" className="fas fa-edit"></i> Ecriture</li>
                        <li><i id="actIcon" className="fas fa-book"></i> Lecture</li>
                        <li><i id="actIcon" className="fas fa-pencil-ruler"></i> Dessin</li>
                    </ul>
                </div>
            </div>
    );
};

export default Hobbies;