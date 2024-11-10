import UserContext from "../UserContext";

function UserDetails({ useContext }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
    useContext(UserContext)
    UserContext()
  );
}

export default UserDetails;
