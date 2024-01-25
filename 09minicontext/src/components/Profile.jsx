import { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;

  return <div>Welcome, {user}</div>;
}

export default Profile;
