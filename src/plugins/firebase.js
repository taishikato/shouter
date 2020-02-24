import config from 'config'
import firebase from 'firebase/app'

const firebaseConfig = config.get('firebaseConfig')

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