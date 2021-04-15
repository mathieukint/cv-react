import React from 'react';

const ProgressBar = (props) => {
    
    // console.log(props)

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="months">
                <span>Expérience</span>
                <span>1 mois</span>
                <span>3 mois</span>
            </div>
            <div>
                {props.languages.map((item) => {
                    let xpMonths = 3;
                    let progressBar = (item.xp / xpMonths * 100 + '%');
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            <div className="progressBar"
                                 style={
                                     {width: progressBar}
                                 }>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default ProgressBar;