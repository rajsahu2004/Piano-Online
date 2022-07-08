const firebaseConfig = {
    apiKey: "AIzaSyDf3yjH94MNdbo5kPuoTereD_AceXIZaB0",
    authDomain: "piano-website-d79d8.firebaseapp.com",
    databaseURL: "https://piano-website-d79d8-default-rtdb.firebaseio.com",
    projectId: "piano-website-d79d8",
    storageBucket: "piano-website-d79d8.appspot.com",
    messagingSenderId: "831308001663",
    appId: "1:831308001663:web:3a8b32029e2798d1e82a4a",
    measurementId: "G-NMXQ05SDLN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);