import { ResponsiveChoropleth } from "@nivo/geo";
import countries from "./usmap.json";
import prisondata from "./prisoncaserate.js";
import generaldata from "./generalcaserate.js";
import React from 'react';

function Mortality () {




    return (
      <div   className="Prison">
        <div style={{ height: "1000px" }}>
          <br ></br>
          <h1 >Prison Case Rates</h1>
          <h6><a href="#General">View General Case Rates</a></h6>
          <MyResponsiveChoropleth data={prisondata} />
        </div>
        <div id="General"style={{ height: "1000px" }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>General Case Rates</h1>
        <h6><a href="#top">View Prison Case Rates</a></h6>
          <MyResponsiveChoropleth data={generaldata} />
        </div>
        <p>According to an analysis of state prison coronavirus cases by The Marshall Project, a nonprofit investigative newsroom dedicated to the U.S. criminal justice system, and The Associated Press.</p>
    </div>  
    );
  
}



const MyResponsiveChoropleth = ({ data }) => (
  <ResponsiveChoropleth
    data={data}
    domain={[0, 80000]}
    features={countries.features}
    colors="reds"
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[1.6,0.9]}
    enableGraticule={false}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    projectionScale={800}
    legends={[
      {
        anchor: "left",
        direction: "column",
        justify: true,
        itemsSpacing: 0,
        itemWidth: 90,
        itemHeight: 18,
        translateX: 20,
        translateY: -100,
        itemDirection: "left-to-right",
        itemTextColor: "#ffffff",
        itemOpacity: 1,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#ffffff",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);


export default Mortality;