import React from 'react';
export default function(props) {

    return (
        <div className="profile-item">

            <img src={props.pimg}></img>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.description}
            </h2>

        </div>
     )
    }