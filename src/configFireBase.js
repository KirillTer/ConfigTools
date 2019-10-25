import * as firebase from 'firebase';

export const appName = "pacs-backend"
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBn8ziNHS5YhO00Ti9p7X-gb_HE8V4cgMA",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "650825219631",
  appId: "1:650825219631:web:2ce09ebddb718429"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
