import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { signOut } from '../../redux/actions';

const SecureHome: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Helmet title="Secure Home" />
      <h1>first</h1>
      <button onClick={() => dispatch(signOut())}>sign out</button>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
      <h1>Secure Home</h1>
    </>
  );
}

export default SecureHome;
