import { connect } from 'react-redux';
import { useRouter } from 'next/router';

interface IsUserRedirectProps {
  auth: {
    uid: string;
  };
  loggedInPath: string;
  children: JSX.Element
}

const IsUserRedirect: React.FC<IsUserRedirectProps> = ({auth, loggedInPath, children}) => {
  const user = !!auth.uid;

  const router = useRouter();

  if (!user) {
    return children;
  }

  if (user && typeof window !== 'undefined') {
    router.push(loggedInPath);
  }

  return null;
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(IsUserRedirect);
