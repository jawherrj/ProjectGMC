// import React, { useState } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [editData, setEditData] = useState({});
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", editData.name);
    data.append("lastName", editData.lastName);
    data.append("email", editData.email);
    data.append("password", editData.password);
    data.append("phone", editData.phone);
    data.append("adresse", editData.adresse);
    data.append("birthday", editData.birthday);
    //  ({
    //     name: data.get("name"),
    //     lastName: data.get("lastName"),
    //     email: data.get("email"),
    //     password: data.get("password"),
    //     phone: data.get("phone"),
    //     adresse: data.get("adresse"),
    //     birthday: data.get("birthday"),
    //     role: data.get("role") ? "mechanic" : "client",
    //   });
    console.log(data);
  };
  return (
    <div>
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
