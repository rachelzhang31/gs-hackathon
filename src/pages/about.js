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
                <p>We created this website to visualize the impact of COVID-19 on different sections of the US population with a special focus on unemployed and incarcerated individuals, who have been affected disproportionately by the pandemic. We also explored mobility trends over time. Our goal was to present this information in a digestible format for people of all ages and technical backgrounds.</p>
            </div>
        );
    }
}

export default About;