import React, { Component } from 'react';
export default function(props) {

    return (
        <div className="profile-container">

            <div className="profile-wrapper">
            <img src={props.img}></img>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.description}
            </h2>
            </div>

        </div>
     )
    }