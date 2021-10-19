import SignIn from '../src/routes/SignIn';
import { IsUserRedirect } from '../src/helpers';
import * as ROUTES from '../src/constants/routes';

const SignInPage: React.FC = () => {
  return (
    <IsUserRedirect loggedInPath={ROUTES.HOME}>
      <SignIn />
    </IsUserRedirect>
  );
}

export default SignInPage;
