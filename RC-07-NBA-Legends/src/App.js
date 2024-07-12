import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css";  // teşekkür linki koymak zorundasın.
import Header from "./components/Header";
import CardContainer from "./components/CardContainer"

function App() {
  return (
    <Container className="text-center">
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
