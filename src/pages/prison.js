import { ResponsiveGeoMap } from "@nivo/geo";
import { ResponsiveGeoMapCanvas } from "@nivo/geo";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Choropleth } from "@nivo/geo";
import countries from "./usmap.json";
import data from "./data";
import React, { Component } from 'react';

function Prison () {

    return (
      <div className="Prison">
        <div style={{ height: "1000px" }}>
          <MyResponsiveChoropleth data={data} />
        </div>
        <hr />
        {/* <div style={{ height: "400px" }}>
          <MyResponsiveGeoMap />
        </div>
        <hr />
        <div style={{ height: "400px" }}>
          <MyResponsiveGeoMapCanvas />
        </div> */}
      </div>
    );
  
}
const MyResponsiveGeoMap = () => (
  <ResponsiveGeoMap
    features={countries.features}
    projectionTranslation={[0.5, 0.5]}
    fillColor="#eeeeee"
    borderWidth={0.5}
    borderColor="#333333"
    enableGraticule={false}
    graticuleLineColor="#666666"
    domain={[0, 1000000]}
  />
);

const MyResponsiveGeoMapCanvas = () => (
  <ResponsiveGeoMapCanvas
    features={countries.features}
    projectionTranslation={[0.5, 0.5]}
    fillColor="#eeeeee"
    borderWidth={0.5}
    borderColor="#333333"
    enableGraticule={false}
    graticuleLineColor="#666666"
    domain={[0, 1000000]}
  />
);

const MyResponsiveChoropleth = ({ data }) => (
  <ResponsiveChoropleth
    data={data}
    domain={[0, 1000000]}
    features={countries.features}
    colors="nivo"
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[1.2,0.8]}
    enableGraticule={false}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    projectionScale={400}
    legends={[
      {
        anchor: "center",
        direction: "column",
        justify: true,
        itemsSpacing: 0,
        itemWidth: 90,
        itemHeight: 18,
        translateX: 20,
        translateY: -100,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);


export default Prison;