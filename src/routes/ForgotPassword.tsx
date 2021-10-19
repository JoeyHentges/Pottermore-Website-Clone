import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect, useDispatch } from 'react-redux';

import * as ROUTES from '../constants/routes';
import { forgotPassword } from '../redux/actions';

const ForgotPassword: React.FC<{authError: string}> = ({authError}) => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <>
      <Helmet title="Forgot Password" />
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Send Request
          </button>
          <div className="red-text center">{authError || ''}</div>
        </div>
      </form>
      <a href={ROUTES.SIGN_IN}>Sign In</a>
    </>
  );
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
});

export default connect(mapStateToProps, null)(ForgotPassword);
