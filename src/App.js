import { useEffect } from "react";
import "./App.css";

// Firebase
import {FirebaseContext} from './components/Firebase';
const APIButton = (props) => {
  const { firebase, ...rest } = props;

  const handleClick = () => {
    const apiCall = firebase.app.functions().httpsCallable("getAPIData");

    console.log(apiCall());
  };

  return <button onClick={handleClick}>Call API (hopefully)</button>;
};

const App = () => {
  
  return (
    <div className="App">
      <FirebaseContext.Consumer>
        {firebase => <APIButton firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  );
};

export default App;
