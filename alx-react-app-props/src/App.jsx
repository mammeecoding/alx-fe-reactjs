import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  UserContext.Provider(userData ,"value")
  return <ProfilePage userData={userData} />;
      <UserContext/>
}

export default App;
