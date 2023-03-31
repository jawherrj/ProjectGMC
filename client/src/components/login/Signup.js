// import React, { useState } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../JS/actions/authactions";

const Signup = () => {
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  console.log(editData);
  const handleSubmit = () => {
    dispatch(register(editData, navigate));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "20px auto",
        width: "550px",
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="first name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder=" last name"
        onChange={handleChange}
      />
      ;
      <input
        name="email"
        type="email"
        placeholder="Email adress"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder=" password"
        onChange={handleChange}
      />
      <input
        name="adresse"
        type="text"
        placeholder="adresse"
        onChange={handleChange}
      />
      <input
        name="birthday"
        type="date"
        placeholder="Birth Date"
        onChange={handleChange}
      />
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`are you a mechanic ?`}
            />
          </div>
        ))}
      </Form>
      <button onClick={handleSubmit}>SIGN UP</button>
    </div>
  );
};

export default Signup;
