import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import getConfig from 'next/config';

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId 
} = getConfig().publicRuntimeConfig;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

if (firebase.apps.length < 1) {
  firebase.initializeApp(config);
  firebase.firestore();
}

export { firebase };
