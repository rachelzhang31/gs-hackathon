import React, { Component } from 'react';

class About extends Component {
    

    render() {
        return (
            <div className="App-header">
                <br></br>
                <h1 style={{color: 'black'}}>About</h1>
                <h3 style={{display:'inline-block', margin:'10px'}}>Team Members:</h3>
                <p style={{display:'inline-block'}}>Cindy Ding, Charles Kraemer, Cory Milsap, and Rachel Zhang</p>
                <br></br>
                <br></br>
                <p>We created this website to visualize the impact of COVID-19 on the U.S. economy. Our goal was to make it digestible for people of all ages and technical backgrounds.</p>
            </div>
        );
    }
}

export default About;