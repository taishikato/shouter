// import config from 'config'
import firebase from 'firebase/app'
import 'firebase/auth';

// const firebaseConfig = config.get('firebaseConfig')
const firebaseConfig = {
  apiKey: "AIzaSyBvzqVNBjBDhve9FG0vJplp_K77O3_mDZQ",
  authDomain: "shouter-app.firebaseapp.com",
  databaseURL: "https://shouter-app.firebaseio.com",
  projectId: "shouter-app",
  storageBucket: "shouter-app.appspot.com",
  messagingSenderId: "796982900782",
  appId: "1:796982900782:web:25afe20a076622036687bf"
}

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId
  })
}


export default firebase