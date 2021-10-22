import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';

import { firebase } from '../src/lib/firebase';
import { rootReducer, RootReducer } from '../src/redux';
import { Theme } from '../theme';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase))
);

const rrfProps = {
  firebase,
  config: { useFirestoreForProfile: true, userProfile: 'users', enableClaims: true },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state: RootReducer) => state.firebase.auth);
  const profile = useSelector((state: RootReducer) => state.firebase.profile);
  if (!isLoaded(auth) || !isLoaded(profile)) return <p>loading...</p>;
  return children;
}

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: AdelleSans,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0px;
  }
`;

class Init extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <Head>
              <link rel="shortcut icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" />
            </Head>
            <Theme>
              <GlobalStyles />
              <Component {...pageProps} />
            </Theme>
          </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

// withRedux wrapper that passes the store to the App Component
export default Init;
