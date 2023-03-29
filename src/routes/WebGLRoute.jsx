import WebGLSketch from "../components/webGL/webGL-template/WebGLsketch";
import ComponentCard from "../ui/ComponentCard/ComponentCard";

export default function WebGLRoute() {
  return (
  <div className="container">
  <ComponentCard component={WebGLSketch} title="WebGL Sketch" description={"A template for starting WebGL designs in react."} />

  </div>);
}
