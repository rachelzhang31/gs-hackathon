// Cory Milsap 12/12/2020

import React, { useEffect } from 'react';

// Mui Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

// Mui styling
import makeStyles from '@material-ui/core/styles/makeStyles';

// Mui Icons
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import EditIcon from '@material-ui/icons/Edit';

// Nivo
import { ResponsiveChoropleth } from '@nivo/geo';
import countries from './countries.json';


const useStyles = makeStyles(() => ({
  root: {
    borderRaidus: 30,
  },
  content: {
    padding: '0px 0px 0px 0px',
    paddingBottom: '0px !important',
    height: 600
  },
  cardTitle: {
    color: '#FFF', 
    fontWeight: '500'
  },
  footer: {
    background: '#D6B48C',
    padding: 10
  }
}));

const Choropleth = props => {
  const {date, data, valueDisplayed, ...rest} = props;

  const [displayedData, setDisplayedData] = React.useState([]);
  const [legendMax, setLegendMax] = React.useState();
  useEffect(() => {
     const filteredData = data.filter(datapoint => datapoint.date === date);
     let newDisplayedData = [];
     let max = 0;
     for (let point of filteredData) {
       if (point[valueDisplayed] > max) max = point[valueDisplayed];
       const obj = {
         id: point.countryId,
         value: point[valueDisplayed],
       };
       newDisplayedData.push(obj);
     }
     setDisplayedData(newDisplayedData)
     setLegendMax(max);
  }, [date, valueDisplayed])

  return (
    <ResponsiveChoropleth
      data={displayedData}
      features={countries.features}
      colors="reds"
      valueFormat=".2s"
      projectionTranslation = {[0.5, .65]}
      projectionScale = {120}
      legends={[
        {
          anchor: "bottom-left",
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
      theme = {{
        background: '#D3D3D3'
      }}
      domain={[0, legendMax]}
    />
  );
      }

const RadioMenu = props => {
  const {options, activeOption, setActiveOption, ...rest} = props;

  const handleChange = event => {
    const newActiveOption = options.find(el => el.id === event.target.value);
    setActiveOption(newActiveOption);
  }

  return (
  <RadioGroup value={activeOption.id} onChange={handleChange} style = {{padding: 20}}>
    {options.map(opt => <FormControlLabel value = {opt.id} control = {<Radio color = 'inherit' style = {{color: '#64A8F0'}}/>} label = {opt.name}/>)}
  </RadioGroup>
  )
}

const PopoverMenu = props => {
  const {anchorEl, handleClose, options, activeOption, setActiveOption} = props;

  useEffect(() => {}, [anchorEl]);

  return (
    <Popover
      open={anchorEl}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      style = {{padding: 20}}
    >
      <RadioMenu options={options} activeOption = {activeOption} setActiveOption = {newOption => setActiveOption(newOption)} />
    </Popover>
  );
}

const GlobalCasesCard = props => {
  const {firebase, data, datesList, status, valueDisplayed, ...rest} = props;
  const classes = useStyles();

  const options = [
    {
      name: 'Total Confirmed Cases',
      id: 'totalConfirmed'
    },
    {
      name: 'Daily Confirmed Cases',
      id: 'newConfirmed'
    },
    {
      name: 'Total Fatalities',
      id: 'totalFatalities'
    },
    {
      name: 'Daily Fatalities',
      id: 'newFatalities'
    },
  ]
  
  // CurrDateIndex is the index of DatesList that is currently selected
  const [currDateIndex, setCurrDateIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(null);     // Autoplay
  const [activeOption, setActiveOption] = React.useState(options[0]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  useEffect(() => {
    if (!datesList) return;
    if (currDateIndex >= datesList.length - 1 && playing)
      togglePlaying();
  }, [currDateIndex])
  const togglePlaying = () => {
    if (!playing) {
      startPlaying();
    }
    else {
      stopPlaying();
    }
  }
  
  const startPlaying = () => {
    const intervalID = setInterval(() => {
      increaseCurrDateIndex();
    }, 250);
    setPlaying(intervalID)
  }

  const increaseCurrDateIndex = () => {
    setCurrDateIndex(prev => prev + 1);
  }

  const stopPlaying = () => {
    clearInterval(playing);
    setPlaying(null);
  }
  const handleSliderChange = (event, newValue) => {
    setCurrDateIndex(newValue);
  }

  const handleMenuOpen = ev => {
    setAnchorEl(ev.currentTarget);
  }
  return (
    <Card className={classes.root} elevation={10}>
      <CardContent className={classes.content}>
        {status === "loading" ? (
          <Grid
            container
            style={{ height: "100%", width: "100%", background: "#D3D3D3" }}
            justify="center"
            alignItems="center"
          >
            <CircularProgress color="inherit" style={{ color: "#64A8F0" }} />
          </Grid>
        ) : (
          <Choropleth
            date={datesList[currDateIndex]}
            data={data}
            valueDisplayed={activeOption.id}
          />
        )}
      </CardContent>
      <CardActions style={{ padding: 0 }}>
        <Grid container className={classes.footer} justify="space-between">
          <Grid
            container
            item
            direction="column"
            alignItems="flex-start"
            xs={6}
          >
            <Grid item>
              <Grid container>
                <Typography variant="h5" className={classes.cardTitle}>
                  {`${activeOption.name} of COVID-19`}
                </Typography>
                <IconButton
                  size="small"
                  color="inherit"
                  style={{ color: "#FFF" }}
                  onClick={handleMenuOpen}
                >
                  <EditIcon />
                </IconButton>
                <PopoverMenu
                  anchorEl={anchorEl}
                  handleClose={() => setAnchorEl(null)}
                  options={options}
                  activeOption={activeOption}
                  setActiveOption={(newOp) => {
                    setActiveOption(newOp);
                  }}
                />
              </Grid>
            </Grid>
            {datesList ? (
              <Typography variant="subtitle1" className={classes.cardTitle}>
                {`${datesList[0]} – ${datesList[datesList.length - 1]}`}
              </Typography>
            ) : null}

            <Typography variant="subtitle1" className={classes.cardTitle}>
              CDC, Marquee
            </Typography>
          </Grid>
          <Grid
            container
            item
            justify="space-around"
            alignItems="center"
            xs={6}
          >
            <Grid item xs={3}>
              {datesList ? (
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  {datesList[currDateIndex]}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={7}>
              <Slider
                value={currDateIndex}
                min={0}
                max={datesList ? datesList.length - 1 : 100}
                onChange={handleSliderChange}
                color="inherit"
                style={{ color: "#64A8F0", marginTop: 4 }}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                size="small"
                color="inherit"
                style={{ color: "#FFF" }}
                onClick={() => togglePlaying()}
              >
                {!playing ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default GlobalCasesCard
