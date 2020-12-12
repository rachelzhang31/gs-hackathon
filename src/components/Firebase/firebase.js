import app from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
// import 'firebase/analytics';
// import "firebase/performance";

// Prod
const config = {
  apiKey: "AIzaSyCPc8HYjEVQlp_xTgY-Nx2LBA_F5K52zDE",
  authDomain: "gs-hackathon.firebaseapp.com",
  projectId: "gs-hackathon",
  storageBucket: "gs-hackathon.appspot.com",
  messagingSenderId: "505118643224",
  appId: "1:505118643224:web:4b088d81cd6b9c72e35f6d",
  measurementId: "G-X3VLM33XE4"
};



class Firebase {
  constructor() {
    app.initializeApp(config);

    this.app = app;
    // this.auth = app.auth();
    this.db = app.firestore();
    this.functions = app.functions();

    // this.perf = app.performance();
    // this.analytics = app.analytics();

    // new app.auth.GoogleAuthProvider();
    // new app.auth.EmailAuthProvider();
  }
}

export default Firebase