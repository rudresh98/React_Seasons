import React from 'react'

import '../CSS/SeasonDisplay.css'
const seasonconfig = {
    summer: {
        text: "its to hot",
        iconname: 'sun'
    },
    winter: {
        text: "its to cold",
        iconname: "snowflake"
    }
}




const getseason = (lat, month) => {

    if (month > 2 && month < 10) {
        return lat > 0 ? 'summer' : 'winter';

    }
    else {
        return lat > 0 ? 'winter' : 'summer';

    }
};

const SeasonDisplay = (props) => {

    const season = getseason(props.lat, new Date().getMonth());
    const {text,iconname}=seasonconfig[season];
    console.log(season)
    return (
        <>
            <div className={`season-display ${season}`}>

                <i className={` icon-left massive ${iconname} icon`} />
                <h1> {text}</h1>
                <i className={`icon-right massive ${iconname} icon`} />
            </div>
        </>
    )
};


export default SeasonDisplay;