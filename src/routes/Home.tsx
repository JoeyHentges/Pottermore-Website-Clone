import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

const Home: React.FC<{}> = () => {

  return (
    <>
      <Helmet title="Home" />
      <h1>Home</h1>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
