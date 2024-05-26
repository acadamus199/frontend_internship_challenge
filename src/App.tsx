import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Body from "./Body.tsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
