import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import LineChart from './linechart.js';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Firebase
import {FirebaseContext} from '../components/Firebase';


const APIButton = props => {
    const {firebase, ...rest} = props;

    const getCovidData = firebase.app.functions().httpsCallable('getCovidData');
    const handleClick = async provider => {
        const response = await getCovidData({dataset: provider});

        if (response.data) {
          const data = JSON.parse(response.data);
          console.log(data);
        }
        else {
          console.error('getCovidData failed');
        }

        
    }
    return (
      <>
        <button onClick={() => handleClick("cdc")} {...rest}>
          Get CDC Data
        </button>
        <button onClick={() => handleClick("who")} {...rest}>
          Get WHO Data
        </button>
      </>
    );
}
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen_AL: false,
            isOpen_NJ: false,
            isOpen_AK: false,
            isOpen_AZ: false,
            isOpen_AR: false,
            isOpen_CA: false,
            isOpen_CO: false,
            isOpen_CT: false,
            isOpen_DE: false,
            isOpen_DC: false,
            isOpen_FL: false,
            isOpen_GA: false,
            isOpen_HI: false,
            isOpen_ID: false,
            isOpen_IL: false,
            isOpen_IN: false,
            isOpen_IA: false,
            isOpen_KS: false,
            isOpen_KY: false,
            isOpen_LA: false,
            isOpen_ME: false,
            isOpen_MD: false,
            isOpen_MA: false,
            isOpen_MI: false,
            isOpen_MN: false,
            isOpen_MS: false,
            isOpen_MO: false,
            isOpen_MT: false,
            isOpen_NE: false,
            isOpen_NV: false,
            isOpen_NH: false,
            isOpen_NJ: false,
            isOpen_NM: false,
            isOpen_NY: false,
            isOpen_NC: false,
            isOpen_ND: false,
            isOpen_OH: false,
            isOpen_OK: false,
            isOpen_OR: false,
            isOpen_PA: false,
            isOpen_RI: false,
            isOpen_SC: false,
            isOpen_SD: false,
            isOpen_TN: false,
            isOpen_TX: false,
            isOpen_UT: false,
            isOpen_VT: false,
            isOpen_VA: false,
            isOpen_WA: false,
            isOpen_WV: false,
            isOpen_WI: false,
            isOpen_WY: false
        };
    }

    mapHandler = (event) => {
        alert(event.target.dataset.name);
    };

    statesCustomConfig = () => {
        return {
            "AL": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_AL: true })
            },
            "AK":{
                fill: "#28FFF2",
                clickHandler: (event) => this.setState({ isOpen_AK: true })
            },
            "AR": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_AR: true })
            },
            "AZ": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_AZ: true })
            },
            "CA": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_CA: true })
            },
            "CO": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_CO: true })
            },
            "CT": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_CT: true })
            },
            "DE": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_DE: true })
            },
            "DC": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_DC: true })
            },
            "FL": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_FL: true })
            },
            "GA": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_GA: true })
            },
            "HI": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_HI: true })
            },
            "ID": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_ID: true })
            },
            "IL": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_IL: true })
            },
            "IN": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_IN: true })
            },
            "IA": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_IA: true })
            },
            "KS": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_KS: true })
            },
            "KY": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_KY: true })
            },
            "LA": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_LA: true })
            },
            "ME": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_ME: true })
            },
            "MD": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_MD: true })
            },
            "MA": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_MA: true })
            },
            "MI": {
                fill: "#28FFF2",
                clickHandler: (event) => this.setState({ isOpen_MI: true })
            },
            "MN": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_MN: true })
            },
            "MS": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_MS: true })
            },
            "MO": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_MO: true })
            },
            "MT": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_MT: true })
            },
            "NE": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_NE: true })
            },
            "NV": {
                fill: "#28FFF2",
                clickHandler: (event) => this.setState({ isOpen_NV: true })
            },
            "NH": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_NH: true })
            },
            "NJ": {
              fill: "#28FFF2",
              clickHandler: (event) => this.setState({ isOpen_NJ: true })
            },
            "NM": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_NM: true })
            },
            "NY": {
              fill: "#28FFF2",
              clickHandler: (event) => this.setState({ isOpen_NY: true })
            },
            "NC": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_NC: true })
            },
            "ND": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_ND: true })
            },
            "OH": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_OH: true })
            },
            "OK": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_OK: true })
            },
            "OR": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_OR: true })
            },
            "PA": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_PA: true })
            },
            "RI": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_RI: true })
            },
            "SC": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_SC: true })
            },
            "SD": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_SD: true })
            },
            "TN": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_TN: true })
            },
            "TX": {
                fill: "#BD2020",
                clickHandler: (event) => this.setState({ isOpen_TX: true })
            },
            "UT": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_UT: true })
            },
            "VT": {
                fill: "#2C8CF9",
                clickHandler: (event) => this.setState({ isOpen_VT: true })
            },
            "VA": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_VA: true })
            },
            "WA": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_WA: true })
            },
            "WV": {
                fill: "#CC0000",
                clickHandler: (event) => this.setState({ isOpen_WV: true })
            },
            "WI": {
                fill: "#2069BD",
                clickHandler: (event) => this.setState({ isOpen_WI: true })
            },
            "WY": {
                fill: "#FF0000",
                clickHandler: (event) => this.setState({ isOpen_WY: true })
            }
          };
    };

    render() {
        return (
        <div>
          <div className="App" style={{marginBottom: '10%', marginTop: '3%'}}>
            <h1>Covid Impact by State</h1>
            <USAMap
              customize={this.statesCustomConfig()}
              onClick={this.mapHandler}
            />
            {this.state.isOpen_AL && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Alabama%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_AL: false})}
                />
            )}
            {this.state.isOpen_AK && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Alaska%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_AK: false})}
                />
            )}
            {this.state.isOpen_AR && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Arkansas%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_AR: false})}
                />
            )}
               {this.state.isOpen_AZ && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Arizona%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_AZ: false})}
                />
            )}
             {this.state.isOpen_CA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/California%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_CA: false})}
                />
            )}
             {this.state.isOpen_CO && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Colorado%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_CO: false})}
                />
            )}
            {this.state.isOpen_CT && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Connecticut%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_CT: false})}
                />
            )}
            {this.state.isOpen_DE && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Delaware%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_DE: false})}
                />
            )}
            {this.state.isOpen_DC && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/District%20of%20Columbia%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_DC: false})}
                />
            )}
             {this.state.isOpen_FL && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Florida%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_FL: false})}
                />
            )}
             {this.state.isOpen_GA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Georgia%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_GA: false})}
                />
            )}
            {this.state.isOpen_HI && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Hawaii%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_HI: false})}
                />
            )}
            {this.state.isOpen_ID && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Idaho%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_ID: false})}
                />
            )}
            {this.state.isOpen_IL && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Illinois%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_IL: false})}
                />
            )}
            {this.state.isOpen_IN && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Indiana%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_IN: false})}
                />
            )}
            {this.state.isOpen_IA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Iowa%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_IA: false})}
                />
            )}
            {this.state.isOpen_KS && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Kansas%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_KS: false})}
                />
            )}
            {this.state.isOpen_KY && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Kentucky%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_KY: false})}
                />
            )}
            {this.state.isOpen_LA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Louisiana%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_LA: false})}
                />
            )}
            {this.state.isOpen_ME && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Maine%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_ME: false})}
                />
            )}
            {this.state.isOpen_MD && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Maryland%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MD: false})}
                />
            )}
            {this.state.isOpen_MA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Massachusetts%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MA: false})}
                />
            )}
            {this.state.isOpen_MI && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Michigan%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MI: false})}
                />
            )}
            {this.state.isOpen_MN && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Minnesota%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MN: false})}
                />
            )}
            {this.state.isOpen_MS && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Mississippi%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MS: false})}
                />
            )}
            {this.state.isOpen_MO && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Missouri%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MO: false})}
                />
            )}
            {this.state.isOpen_MT && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Montana%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_MT: false})}
                />
            )}
            {this.state.isOpen_NE && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Nebraska%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NE: false})}
                />
            )}
            {this.state.isOpen_NV && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Nevada%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NV: false})}
                />
            )}
            {this.state.isOpen_NH && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/New%20Hampshire%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NH: false})}
                />
            )}
            {this.state.isOpen_NJ && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/New%20Jersey%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NJ: false})}
                />
            )}
            {this.state.isOpen_NM && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/New%20Mexico%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NM: false})}
                />
            )}
            {this.state.isOpen_NY && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/New%20York%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NY: false})}
                />
            )}
            {this.state.isOpen_NC && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/North%20Carolina%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_NC: false})}
                />
            )}
            {this.state.isOpen_ND && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/North%20Dakota%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_ND: false})}
                />
            )}
            {this.state.isOpen_OH && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Ohio%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_OH: false})}
                />
            )}
            {this.state.isOpen_OK && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Oklahoma%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_OK: false})}
                />
            )}
            {this.state.isOpen_OR && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Oregon%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_OR: false})}
                />
            )}
            {this.state.isOpen_PA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Pennsylvania%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_PA: false})}
                />
            )}
            {this.state.isOpen_RI && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Rhode%20Island%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_RI: false})}
                />
            )}
            {this.state.isOpen_SC && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/South%20Carolina%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_SC: false})}
                />
            )}
            {this.state.isOpen_SD && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/South%20Dakota%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_SD: false})}
                />
            )}
            {this.state.isOpen_TN && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Tennessee%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_TN: false})}
                />
            )}
            {this.state.isOpen_TX && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Texas%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_TX: false})}
                />
            )}
            {this.state.isOpen_UT && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Utah%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_UT: false})}
                />
            )}
            {this.state.isOpen_VT && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Vermont%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_VT: false})}
                />
            )}
            {this.state.isOpen_VA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Virginia%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_VA: false})}
                />
            )}
            {this.state.isOpen_WA && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Washington%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_WA: false})}
                />
            )}
            {this.state.isOpen_WV && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/West%20Virginia%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_WV: false})}
                />
            )}
            {this.state.isOpen_WI && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Wisconsin%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_WI: false})}
                />
            )}
            {this.state.isOpen_WY && (
                <Lightbox
                    mainSrc={'https://github.com/rachelzhang31/gs-hackathon/blob/US-States-Mobility/Wyoming%20Mobility.png?raw=true'}
                    onCloseRequest={() => this.setState({isOpen_WY: false})}
                />
            )}
            <h6 style={{ color: "black", marginLeft: '5%', marginRight: '5%', marginTop: '2%' }}>
              States are color-coded with respect to degree of social distancing according to mobility data from Unacast,  where the lightest blue states distanced most heavily, and the lightest red states distanced least heavily.  Click on an individual state for specialized traffic data attained via Google Maps mobility reports. 
            </h6>
          </div>
          </div>
        );
    }
}

export default Home;