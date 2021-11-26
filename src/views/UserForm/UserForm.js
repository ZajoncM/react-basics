import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addUser, editUser } from "../../reducers/userReducer";
import { useNavigate, useParams } from "react-router";

const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userData = useSelector((state) =>
    state.find((user) => user.id === userId)
  );

  const formik = useFormik({
    initialValues: userData || { name: "", surname: "" },
    onSubmit: (values) => {
      if (userData) {
        dispatch(editUser({ ...userData, ...values }));
      } else {
        dispatch(addUser({ ...values, id: v4() }));
      }

      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      <button type="submit">{userId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default UserForm;
