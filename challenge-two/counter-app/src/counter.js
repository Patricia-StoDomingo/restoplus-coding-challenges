import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import firebase from "./firebase";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const ref = firebase.firestore().collection("counters");
  const counterRef = firebase
    .firestore()
    .collection("counters")
    .doc("OJ2vgh0R2Rw34lxKPjAC");

  // create a function to get the data from firebase then update the state of counter
  const getCounter = () => {
    ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setCounter(doc.data().current);
      });
    });
  };

  // call the function inside a useEffect
  useEffect(() => {
    getCounter();
  }, []);

  // create a function for incrementing counter everytime the plus button is clicked
  const handleIncrement = async () => {
    try {
      const addCounter = await counterRef.update({
        current: counter + 1,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // create a function for decrementing counter everytime the minus button is clicked
  const handleDecrement = async () => {
    try {
      const subtractCounter = await counterRef.update({
        current: counter - 1,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // create a function for resetting the counter to 0 everytime the reset button is clicked
  const handleReset = async () => {
    try {
      const resetCounter = await counterRef.update({
        current: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="counter-number">{counter}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="counter-button" lg={3}>
          <Button className="ind-button" onClick={handleIncrement}>
            +
          </Button>
        </Col>
        <Col className="counter-button" lg={6}>
          <Button className="ind-button" onClick={handleReset}>
            Reset
          </Button>
        </Col>
        <Col className="counter-button" lg={3}>
          <Button className="ind-button" onClick={handleDecrement}>
            -
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
