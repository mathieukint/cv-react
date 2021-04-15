import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>

            <div className="exp1">
                <h4 id="worktitle">Reconversion professionnelle <i className="fas fa-search"></i></h4>
                <h5 id="workdate">Depuis Décembre 2020</h5>
                <p>
                    <ul>
                        <li>1. Formation de développeur Java/JEE pendant 3 mois à l'EPSI Montpellier.</li>
                        <li>2. Formation de développeur JavaScript FullStack avec React et NodeJS à Diginamic Montpellier.</li>
                    </ul>
                </p>
                
                
            </div>
            <div className="exp2">
                <h4 id="worktitle">Enseignant de Physique-Chimie et Mathématiques <i className="fas fa-search"></i></h4>
                <h5 id="workdate">Septembre 2016 - Août 2020</h5>
                <p>
                    <ul>
                        <li>2016-2020 : Enseignant en lycée professionnel.</li>
                        <li>2016-2017 : Enseignant en prépa PACES et à domicile pour Acadomia.</li>
                    </ul>
                </p>
            </div>
            <div className="exp3">
                <h4 id="worktitle">Assistant de Recherche en Physique des Milieux Denses <i className="fas fa-search"></i></h4>
                <h5 id="workdate">Septembre 2011 - Janvier 2015</h5>
                <p id="workPlace">Laboratoire Charles Coulomb, Montpellier</p>
                <p>Travaux de recherches menés dans le cadre d'une thèse de doctorat :</p>
                <p id="researchTitle">Etude in-situ de l'élasticité de la silice 
                    vitreuse sous très fortes pressions par spectroscopie Brillouin.
                </p>
                
            </div>
        </div>
    );
};
export default Experience;