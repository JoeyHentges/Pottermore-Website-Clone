import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect, useDispatch } from 'react-redux';

import * as ROUTES from '../constants/routes';
import { signUp } from '../redux/actions';

const SignUp: React.FC<{authError: string}> = ({authError}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp({ email, password, firstName, lastName }));
  };

  return (
    <>
      <Helmet title="Sign up" />
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={({ target }) => setFirstName(target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={({ target }) => setLastName(target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Register
          </button>
          <div className="red-text center">{authError || ''}</div>
        </div>
      </form>
      <a href={ROUTES.SIGN_IN}>Sign in</a>
    </>
  );
};

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
});

export default connect(mapStateToProps, null)(SignUp);
