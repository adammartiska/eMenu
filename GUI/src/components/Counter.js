import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./MenuItem.css";
import "./Counter.css";

const Counter = ({ name, price }) => {
  const [count, setCount] = React.useState(0);
  return (
    <ButtonGroup aria-label="Basic example" className="buttonGroupWrapper">
      <Button variant="light" className="buttonIcon">
        <FaPlus />
      </Button>
      <Button variant="light" className="buttonIcon">
        <div>{count}</div>
      </Button>
      <Button variant="light" className="buttonIcon">
        <FaMinus />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
