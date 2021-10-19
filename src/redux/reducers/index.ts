import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { alertReducer } from './alertReducer';
import { articleReducer } from './articleReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  alert: alertReducer,
  article: articleReducer,
  auth: authReducer
});

export interface RootReducer {
  firestore: {

  },
  firebase: {
    auth: unknown,
    profile: unknown
  },
  alert: {
    alertError: string;
  },
  article: {
    articleError: string,
    articles: [],
    article: {},
  },
  auth: {
    authError: string
  }
}
