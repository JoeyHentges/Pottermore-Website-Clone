import SecureHome from '../../src/routes/secure/Home';
import { ProtectedRoute } from '../../src/helpers';
import * as ROUTES from '../../src/constants/routes';

const SecureHomePage: React.FC = () => {
  return (
    <ProtectedRoute redirectPath={ROUTES.SIGN_IN}>
      <SecureHome />
    </ProtectedRoute>
  );
}

export default SecureHomePage;
