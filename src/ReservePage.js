import React, { useState } from "react";
import PizzaLeft from "./Images/pizzaLeft.jpg";
import DateTimePicker from "react-datetime-picker";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import "./ReservePage.css";
import { useHistory } from "react-router";

function Reserve() {
  const history = useHistory();
  const db = getFirestore();
  const [value, onChange] = useState(new Date());
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "reservation"), {
        Fullname: document.getElementById("Fullname").value,
        Email: document.getElementById("Email").value,
        DateofReservation: value,
        numberPeople: document.getElementById("numpeople").value,
        Notes: document.getElementById("customernotes").value,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    history.push("/thankyou");
  };
  return (
    <div className="reserve">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${PizzaLeft})`,
        }}
      ></div>
      <div className="rightSide">
        <h1>Book a Table</h1>
        <form id="reserve-form" onSubmit={sendData}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            id="Fullname"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            id="Email"
            required
          />
          <div className="datetimebox">
            <DateTimePicker
              onChange={onChange}
              value={value}
              className="datetime"
            />
          </div>
          <label htmlFor="number">Number of people</label>
          <input
            type="number"
            name="number"
            required
            placeholder="How many people"
            id="numpeople"
          ></input>
          <label htmlFor="message">Note</label>
          <textarea
            rows="4"
            placeholder="Your notes..."
            name="message"
            id="customernotes"
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
