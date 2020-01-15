import React, { Component } from 'react';
export default function(props) {

    return (
        <div className="profile-container">

        
            <img src="IMG_0316.png"></img>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.description}
            </h2>

        </div>
     )
    }