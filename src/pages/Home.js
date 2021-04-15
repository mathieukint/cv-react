import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    {/* <h1 id="name">Mathieu Kint</h1> */}
                    <h1 id="title"> Développeur Java Junior </h1>
                    <p id="presentation">
                        Développeur Java-JEE Junior, Docteur en Physique des milieux denses, 
                        judoka et écrivain amateur de science-fiction, mes compétences et mes 
                        centres d'intérêt me permettent d’appréhender la numérisation et 
                        l'évolution technologique actuelle
                    </p>
                    <div className="pdf">
                        <a href="./media/mkint_CV_2021AVR.pdf" target="blank">Télécharger le CV en version pdf</a>
                    </div>
                    {/* <br/><br/><br/>
                    <div className="certificates">
                        Certifications:
                        <ul>
                            <li> - Java Foundation</li>
                            <li> - OPQUAST : Qualité Web</li>
                        </ul>
                    </div> */}

                </div>

            </div>
        </div>
    );
};

export default Home;