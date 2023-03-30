import React from "react";
const users = [
  {
    name: "jawher",
    lastName: "jawher",
    email: "jawher@gmail.com",
    password: 123456,
  },
  {
    name: "maher",
    lastName: "maher",
    email: "maher@gmail.com",
    password: 123456,
  },
];
const Home = () => {
  return (
    <>
      {users.map((user) => {
        return (
          <div>
            <ul>
              <li>name:{user.name}</li>
              <li>lastName:{user.lastName}</li>
              <li>email{user.email}</li>
              <li>password:{user.password}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Home;
