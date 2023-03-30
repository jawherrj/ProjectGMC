import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get();
  });
  return (
    <div>
      <input type="email" placeholder="Email adress" />
      <input type="password" placeholder=" adress" />;
    </div>
  );
};

export default Login;
