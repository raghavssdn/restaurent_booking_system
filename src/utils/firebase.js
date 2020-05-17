import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1rvVEloLReb6GsOWLMmVfXbXP0gJMRoY",
    authDomain: "restaurentbillingserver.firebaseapp.com",
    databaseURL: "https://restaurentbillingserver.firebaseio.com",
    projectId: "restaurentbillingserver",
    storageBucket: "restaurentbillingserver.appspot.com",
    messagingSenderId: "219578071540",
    appId: "1:219578071540:web:72099ea2b3c71e76f361a1",
    measurementId: "G-5YZBF227PC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;