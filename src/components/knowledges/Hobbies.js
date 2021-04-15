import React from 'react';

const Hobbies = () => {
    return (
            <div className="activities">
                <h3> Activités</h3>
                <div className="actList">
                    <ul>
                        <li><i href="./media/judo.jpg"></i> Judo</li>
                        <li><i className="fas fa-running"></i> Course à pied</li>
                        <li><i className="fas fa-biking"></i> Cyclisme</li>
                        <li><i className="fas fa-basketball-ball"></i> Basketball</li>
                    </ul>
                    <ul>
                        <li><i className="fas fa-edit"></i> Ecriture</li>
                        <li><i className="fas fa-book"></i> Lecture</li>
                        <li><i className="fas fa-pencil-ruler"></i> Dessin</li>
                    </ul>
                </div>
            </div>
    );
};

export default Hobbies;