import React from 'react';

// Firebase
import {FirebaseContext} from '../components/Firebase';

// Mui Comonents
import Grid from '@material-ui/core/Grid';

// Custom Components
import GlobalCases from '../components/Maps/GlobalCases';

const Global = props => {
  const {firebase, ...rest} = props;

  const [data, setData] = React.useState()
  const [datesList, setDatesList] = React.useState();
  const [status, setStatus] = React.useState('loading');

  React.useEffect(async () => {
    // Load in data
    const getCovidData = firebase.app.functions().httpsCallable("getCovidData");
    const response = await getCovidData({ dataset: "who" });

    if (response.data) {
      const data = JSON.parse(response.data);
      setData(data.data);

      // Get list of all available dates in dataset.
      let dates = [];
      for (let point of data.data) {
        dates.push(point.date);
      }

      // Remove duplicate dates and sort
      let uniqueDates = [...new Set(dates)];
      uniqueDates.sort();

      setDatesList(uniqueDates);
      setStatus("successful");

    } else {
      setStatus("failed");
      console.error("getCovidData failed");
    }
  }, []);

  return (
    <Grid container style = {{width: '100vw'}} justify = 'space-around' {...rest}>
      <Grid item xs = {12} md = {10}>
      <GlobalCases data = {data} status = {status} datesList = {datesList}/>
      </Grid>
    </Grid>
  )
}

export default Global;