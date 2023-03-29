import WebGLSketch from "../components/webGL/webGL-template/WebGLsketch";
import ThreeGalaxyGenerator from "../components/webGL/three-galaxygenerator/ThreeGalaxyGenerator";
import ComponentCard from "../ui/ComponentCard/ComponentCard";

export default function WebGLRoute() {
  return (
  <div className="container">
  <ComponentCard component={WebGLSketch} title="WebGL Sketch" description={"A template for starting WebGL designs in react."} />
  <ComponentCard component={ThreeGalaxyGenerator} title="Galaxy Generator" description={"An interactive galaxy generator made with Three.js"} />

  </div>);
}
