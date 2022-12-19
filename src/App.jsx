import Attributes from "./components/attributes";
import Carousels from "./components/carousel";
import Customers from "./components/customers";
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
      {/* Customers */}
      <Customers />
    </>
  );
}

export default App;
