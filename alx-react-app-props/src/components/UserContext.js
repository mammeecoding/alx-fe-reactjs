React.createContext("react")
function UserContext({ userData }) {
  return (
    UserContext.Provider(userData ,"value")
  );
}

export default UserContext
