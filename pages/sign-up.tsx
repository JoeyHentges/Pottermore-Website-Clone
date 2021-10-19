import SignUp from '../src/routes/SignUp';
import { IsUserRedirect } from '../src/helpers';
import * as ROUTES from '../src/constants/routes';

const SignUpPage: React.FC = () => {
  return (
    <IsUserRedirect loggedInPath={ROUTES.HOME}>
      <SignUp />
    </IsUserRedirect>
  );
}

export default SignUpPage;
