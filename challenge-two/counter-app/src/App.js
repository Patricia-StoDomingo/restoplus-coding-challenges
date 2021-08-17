import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./counter";

function App() {
  return (
    <Container className="outer">
      <Counter />
    </Container>
  );
}

export default App;
