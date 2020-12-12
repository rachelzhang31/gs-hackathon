import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';


class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                  "id": "Caucasian",
                  "color": "hsl(350, 70%, 50%)",
                  "data": [
                    {
                      "x": "Jan 2017",
                      "y": 4.2
                    },
                    {
                      "x": "Jan 2018",
                      "y": 3.5
                    },
                    {
                      "x": "Jan 2019",
                      "y": 3.5
                    },
                    {
                      "x": "Jan 2020",
                      "y": 3.1
                    },
                    {
                      "x": "Mar 2020",
                      "y": 4
                    },
                    {
                      "x": "Jul 2020",
                      "y": 9.2
                    },
                    {
                      "x": "Sept 2020",
                      "y": 7.0
                    },
                    {
                      "x": "Nov 2020",
                      "y": 5.9
                    }
                  ]
                },
                {
                  "id": "African American",
                  "color": "hsl(122, 70%, 50%)",
                  "data": [
                    {
                      "x": "Jan 2017",
                      "y": 7.5
                    },
                    {
                      "x": "Jan 2018",
                      "y": 7.5
                    },
                    {
                      "x": "Jan 2019",
                      "y": 6.8
                    },
                    {
                      "x": "Jan 2020",
                      "y": 6
                    },
                    {
                      "x": "Mar 2020",
                      "y": 6.7
                    },
                    {
                      "x": "Jul 2020",
                      "y": 14.6
                    },
                    {
                      "x": "Sept 2020",
                      "y": 12.1
                    },
                    {
                      "x": "Nov 2020",
                      "y": 10.3
                    }
                  ]
                },
                {
                  "id": "Asian",
                  "color": "hsl(244, 70%, 50%)",
                  "data": [
                    {
                      "x": "Jan 2017",
                      "y": 3.7
                    },
                    {
                      "x": "Jan 2018",
                      "y": 3.0
                    },
                    {
                      "x": "Jan 2019",
                      "y": 3.1
                    },
                    {
                      "x": "Jan 2020",
                      "y": 3
                    },
                    {
                      "x": "Mar 2020",
                      "y": 4.1
                    },
                    {
                      "x": "Jul 2020",
                      "y": 12.0
                    },
                    {
                      "x": "Sept 2020",
                      "y": 8.9
                    },
                    {
                      "x": "Nov 2020",
                      "y": 6.7
                    }
                  ]
                },
                {
                  "id": "Hispanic",
                  "color": "hsl(185, 70%, 50%)",
                  "data": [
                    {
                      "x": "Jan 2017",
                      "y": 5.8
                    },
                    {
                      "x": "Jan 2018",
                      "y": 5.0
                    },
                    {
                      "x": "Jan 2019",
                      "y": 4.8
                    },
                    {
                      "x": "Jan 2020",
                      "y": 4.3
                    },
                    {
                      "x": "Mar 2020",
                      "y": 6
                    },
                    {
                      "x": "Jul 2020",
                      "y": 12.9
                    },
                    {
                      "x": "Sept 2020",
                      "y": 10.3
                    },
                    {
                      "x": "Nov 2020",
                      "y": 8.4
                    }
                  ]
                }
              ]
        }
    }

    render() {
        return(
            <div>
              <div style={{height: 400, width: 1000}}>
                <ResponsiveLine
                    data={this.state.data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: '0', max: '16', stacked: false, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
                </div>
              </div>
        )
    }
}

export default LineChart;