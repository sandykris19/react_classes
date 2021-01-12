import React from "react";
import ReactDOM from "react-dom";
import { Container, Alert } from "reactstrap";
import Todo from "./components/Board/Todo";

function App() {
  return (
    <>
      <Container className="text-center my-2" style={{ width: "500px" }}>
        <Todo />
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
