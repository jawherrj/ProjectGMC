import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../JS/actions/authactions";

import "./style.css";

const Home = () => {
  const handleClick = () => {
    const dispatch = useDispatch;
    dispatch(getCurrentUser());
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div>
        <a id="login-customer" class="btn btn--border" href="/login">
          Client area
        </a>
        <a className="btn" id="login-mechanic" class="btn" href="/login">
          Mechanic area
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
      </div>
      <h2 style={{ color: "blue" }}>
        Book your appointment with Available mechanic in 1 min. stopwatch!
      </h2>
      <div>
        <ul className="one">
          <li>
            <h4>Choose your service</h4>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/car-4741990-3945475.png"
              alt="1"
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h4>Choose your mechanic</h4>
            <img
              src="https://st2.depositphotos.com/3631853/6755/v/600/depositphotos_67551369-stock-illustration-cartoon-plumber-holding-a-monkey.jpg"
              alt="2"
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h4>Choose the date and the time</h4>
            <img
              src="https://www.sqlservertutorial.net/wp-content/uploads/sql-server-date-functions.svg"
              alt="3"
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h4>proclaim your happiness</h4>
            <img
              src="https://www.aihr.com/wp-content/uploads/Graphic-Rating-Scale-1000x553-1.png"
              alt="4"
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <h2 style={{ color: "blue" }}>Don't let your car part gather dust</h2>
      <br />

      <div>
        <ul className="yuyu">
          <li>
            <h3>Engine</h3>
            <img
              src="https://www.goodmecano.com/media/img/Services%20Icons/moteur.svg"
              alt=""
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h3>Tires</h3>
            <img
              src="https://www.goodmecano.com/media/img/Services%20Icons/icone-pneus.svg"
              alt=""
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h3>Cooling and air conditioning</h3>
            <img
              src="https://www.goodmecano.com/media/img/Services%20Icons/conditioning.svg"
              alt=""
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
          <li>
            <h3>Maintenance</h3>
            <img
              src="https://www.goodmecano.com/media/img/Services%20Icons/icone-divers.svg"
              alt=""
              style={{ Width: "100px", height: "100px" }}
            />
          </li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Home;
