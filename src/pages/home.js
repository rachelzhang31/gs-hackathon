import React, { Component } from 'react';
import USAMap from 'react-usa-map';

// Firebase
import {FirebaseContext} from '../components/Firebase';

const APIButton = props => {
    const {firebase, ...rest} = props;

    const getCovidData = firebase.app.functions().httpsCallable('getCovidData');
    const handleAPICall = async () => {
        const responseStr = await getCovidData();
        const res = JSON.parse(responseStr);
        console.log(res);
    }
    return (
        <button onClick = {handleAPICall} {...rest}>Call API </button>
    );
}
class Home extends Component {
    mapHandler = (event) => {
        alert(event.target.dataset.name);
    };

    statesCustomConfig = () => {
        return {
            "NJ": {
              fill: "navy",
              clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
            },
            "NY": {
              fill: "#CC0000"
            },
            "MN": {
                fill: "red"
            }
          };
    };

    render() {
        return (
          <div className="App">
            <FirebaseContext.Consumer>
              {(firebase) => <APIButton firebase={firebase} />}
            </FirebaseContext.Consumer>
            <h1 style={{ color: "black" }}>Covid Impact by State</h1>
            <USAMap
              customize={this.statesCustomConfig()}
              onClick={this.mapHandler}
            />
            <h6 style={{ color: "black" }}>
              Dataset provided by the CDC and accessed via Goldman Sachs's
              Marquee API
            </h6>
          </div>
        );
    }
}

export default Home;