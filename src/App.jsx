import Attributes from "./components/attributes";
import Carousels from "./components/carousel";
import Projects from "./components/projects";
import Showcase from "./components/showcase";


function App() {
  return (
    <>
      {/* Showcase */}
      <Showcase />
      {/* Projects */}
      <Projects />
      {/* Carousel */}
      <Carousels />
      {/* Attributes */}
      <Attributes />
    </>
  );
}

export default App;
