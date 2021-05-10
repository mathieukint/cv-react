// Navigation du site

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';

const App = () => {

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/portfolio" component={UnderConstruction} />
                    <Route path="/contact" component={UnderConstruction} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>  
        </>
    );
};

export default App;