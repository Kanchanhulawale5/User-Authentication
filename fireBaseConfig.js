// firebaseConfig.js
import firebase from '@react-native-firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5zog32AcH8tXQBOW6NqYBFJftN7N142I',
  authDomain: 'myfirstproject-97200.firebaseapp.com',
  databaseURL: 'https://myfirstproject-97200-default-rtdb.firebaseio.com',
  projectId: 'myfirstproject-97200',
  storageBucket: 'myfirstproject-97200.appspot.com',
  messagingSenderId: '959566408547',
  appId: '1:959566408547:web:47aa567b16099d385f4156',
  measurementId: 'G-SSVBQ6LK31',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
