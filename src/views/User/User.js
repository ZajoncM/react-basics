import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User: {userId}</h1>
      <Link to={`..`}>goBack</Link>
    </div>
  );
};

export default User;
