import React, { Component } from "react";
import ProfileItem from "./profile-item"

export default class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Crewsades",
            isLoading: false,
            data: [
                {name: "Dallin Bledsoe", description: "Founder, CEO",  image: "img"},
                {name: "Johnny Wilcox", description: "CFO",  image: "img"},
                {name: "Levi Hassan", description: "CSO",  image: "img"},
                {name: "Braxton Frasure", description: "VPoF",  image: "img"},
                {name: "Jaxon Potter", description: "Skater",  image: "img"},
                {name: "Evan Spendlove", description: "COO",  image: "img"},
                {name: "Cameron Suttner", description: "CSMO",  image: "img"},
                {name: "Sam Potter", description: "Founder",  image: "img"}
            
            ]
        }
    }

    profileItems() {
        return this.state.data.map(item => {
            return <ProfileItem name={item.name} description={item.description} />
        } )
    }
    render() {
        return (
           <div>
               <h2>profile items</h2>
               {this.profileItems()}
           </div>
        )
    }
}

