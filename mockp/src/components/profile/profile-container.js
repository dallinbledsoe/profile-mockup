import React, { Component } from "react";
import ProfileItem from "./profile-item"

export default class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Crewsades",
            isLoading: false,
            data: [
                {name: "Dallin Bledsoe", description: "Founder, CEO",  img: "https://source.unsplash.com/random"},
                {name: "Johnny Wilcox", description: "CFO",  img: "https://source.unsplash.com/random"},
                {name: "Levi Hassan", description: "CSO",  img: "https://source.unsplash.com/random"},
                {name: "Braxton Frasure", description: "VPoF",  img: "https://source.unsplash.com/random"},
                {name: "Jaxon Potter", description: "Skater",  img: "https://source.unsplash.com/random"},
                {name: "Evan Spendlove", description: "COO",  img: "https://source.unsplash.com/random"},
                {name: "Cameron Suttner", description: "CSMO",  img: "https://source.unsplash.com/random"},
                {name: "Sam Potter", description: "Founder",  img: "https://source.unsplash.com/random"}
            
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

