import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC4V4BqcXC4yZg4LVuP6FSOC3JVO8hUZAQ",
    authDomain: "foodapp-855d2.firebaseapp.com",
    databaseURL: "https://foodapp-855d2-default-rtdb.firebaseio.com",
    projectId: "foodapp-855d2",
    storageBucket: "foodapp-855d2.appspot.com",
    messagingSenderId: "275475435419",
    appId: "1:275475435419:web:5325eab398397185239b3e"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};