import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            
            <div id className="id">
                <div className="idContent">
                    <img id="portrait" src="./media/portrait.png" alt="profile-pic" width="142" />
                    <h1 id='cvName'>Mathieu Kint</h1>
                </div>
            </div>

            <div className="navigation">

                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span> Accueil </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-cogs"></i>
                            <span> Compétences </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/formation" activeClassName="navActive">
                            <i className="fas fa-graduation-cap"></i>
                            <span> Formations </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span> Portfolio </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span> Contact </span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mathieukint" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" >
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mathieukint" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-github" >
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/mathieukint" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" >
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wattpad.com/user/Mat_Young" target="blank" rel="noopener noreferrer">
                            <i className="fas fa-book" >
                            </i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>mathieukint - avril 2021</p>
                </div>
            </div>



        </div>
    );
};

export default Navigation;