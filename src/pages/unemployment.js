import React, { Component } from 'react';
import LineChart from './linechart.js';

class Unemployment extends Component{

    render(){
        return(
            <div>
            <h1 style={{fontSize: 25}}>Unemployment Rate by Ethnicity 2017-2020</h1>
            <LineChart/>
            <h6 style={{marginTop: '2%'}}>Data attained from U.S. National Bureau of Labor Statistics</h6>
        </div>
        )
    }
}

export default Unemployment;