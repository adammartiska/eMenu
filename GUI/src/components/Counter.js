import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./MenuItem.css";

const Counter = ({ name, price }) => {
  const [count, setCount] = React.useState(0);
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">
        <FaPlus />
      </Button>
      <Button variant="secondary">{count}</Button>
      <Button variant="secondary">
        <FaMinus />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
