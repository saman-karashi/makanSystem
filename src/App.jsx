import Attributes from "./components/attributes";
import Carousels from "./components/carousel";
import Customers from "./components/customers";
import Projects from "./components/projects";
import Showcase from "./components/showcase";
import Order from "./components/order";

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
      {/* Order */}
      <Order />
    </>
  );
}

export default App;
