import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../JS/actions/authactions";
const Login = () => {
  const [loginData, setEditData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEditData({ ...loginData, [e.target.name]: e.target.value });
  };
  const alertMessage = useSelector((state) => state.auth.alert);

  const handleSubmit = () => {
    dispatch(login(loginData, navigate));
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10% auto ",
        width: "550px",
      }}
    >
      <input name="email" type="email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit}>LOGIN</button>
      {alertMessage ? (
        <alert severity="success" color="info">
          {alertMessage}, you can login to your account now
        </alert>
      ) : (
        ""
      )}
    </div>
  );
};
export default Login;
