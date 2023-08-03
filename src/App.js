import About from "./Components/About";
import Contact from "./Components/Contact";
import Mainsection from "./Components/Mainsection";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>

      <div>
        <div className="h-[100vh] overflow-hidden ">
          <Navbar />
          <hr />
          <Mainsection />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
