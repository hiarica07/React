import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import ContainerSSS from "./components/styles/ContainerSSS";

function App() {

  const style = {
    responsive: "724px",
    golge: "0 10px 10px rgba(0,0,0,0.15)",
  };



  return (

    <ThemeProvider theme={style}>

    <ContainerSSS>
      <Header/>
      <Card/>
    </ContainerSSS>

    </ThemeProvider>
  );
}

export default App;
