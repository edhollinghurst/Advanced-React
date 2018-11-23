import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionsPage = (props) => (
  <div>
    <PleaseSignIn>
      <p>Permissions!</p>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
