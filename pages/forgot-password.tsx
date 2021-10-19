import ForgotPassword from '../src/routes/ForgotPassword';
import { IsUserRedirect } from '../src/helpers';
import * as ROUTES from '../src/constants/routes';

const SignInPage: React.FC = () => {
  return (
    <IsUserRedirect loggedInPath={ROUTES.HOME}>
      <ForgotPassword />
    </IsUserRedirect>
  );
}

export default SignInPage;
