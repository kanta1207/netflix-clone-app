import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/organisms/Navbar";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
