import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [Data, setData] = useState("");
  // const handleChange=
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    console.log({
      name: data.get("name"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      phone: data.get("phone"),
      adresse: data.get("adresse"),
      birthday: data.get("birthday"),
      role: data.get("role") ? "mechanic" : "client",
    });
    // console.log(userData)
  };
  return (
    <div>
      <input name="name" type="text" placeholder="first name" />
      <input name="lastName" type="text" placeholder=" last name" />;
      <input name="email" type="email" placeholder="Email adress" />
      <input name="password" type="password" placeholder=" password" />
      <input name="adresse" type="text" placeholder="adresse" />
      <input name="birthday" type="date" placeholder="Birth Date" />
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
