import { useNavigate } from "react-router-dom";

const Cars = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Cars</h1>
      <button onClick={handleClick}>go home</button>
    </div>
  );
};

export default Cars;
