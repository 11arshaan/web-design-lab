import WebGLSketch from "../components/webGL/webGL-template/WebGLsketch";
import ThreeGalaxyGenerator from "../components/webGL/three-galaxygenerator/ThreeGalaxyGenerator";
import ComponentCard from "../ui/ComponentCard/ComponentCard";

import galaxygeneratorpreview from "../assets/images/previews/galaxygenerator.png";

export default function WebGLRoute() {
  return (
  <div className="container">
  <ComponentCard component={WebGLSketch} title="WebGL Sketch" description={"A template for starting WebGL designs in react."} />
  <ComponentCard component={ThreeGalaxyGenerator} preview={galaxygeneratorpreview} title="Galaxy Generator" description={"An interactive galaxy generator made with Three.js"} />

  </div>);
}
