import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    
    state = {
        languages: [
            {id: 1, value: "Java", xp:3},
            {id: 2, value: "JavaScript", xp:2},
            {id: 3, value: "HTML", xp:1.5},
            {id: 4, value: "CSS", xp:1.5},
            {id: 5, value: "SQL", xp:3}
        ],
        frameworks: [
            {id: 1, value: "Angular", xp:1},
            {id: 2, value: "Java EE", xp:1},
        ],
        libraries: [
            {id: 1, value: "React", xp:1},
            {id: 2, value: "Bootstrap", xp:1},
            {id: 3, value: "jQuery", xp:1.5},
        ],
    }

    render() {
        
        let {languages, frameworks, libraries} = this.state;

        return (
            <div className="LangFraWokLib">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="Langages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks"
                />
                <ProgressBar
                    languages={libraries}
                    className="librariesDisplay"
                    title="Bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;
