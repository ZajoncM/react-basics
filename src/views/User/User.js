import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();

  return <p>User: {userId}</p>;
};

export default User;
