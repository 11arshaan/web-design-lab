import styles from "./WebGLsketch.module.scss";
import { useRef, useEffect } from "react";

export default function WebGLSketch() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  function init() {
    let canvas = canvasRef.current;
    let container = containerRef.current;
    //get the width and height of the container
    let width = container.clientWidth;
    let height = container.clientHeight;
    //set the canvas width and height to the container width and height
    canvas.width = width;
    canvas.height = height;
    let gl;
    gl = canvas.getContext("webgl2");
    canvas.style.borderColor = "crimson";
    canvas.style.borderRadius = ".5rem";
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="component-view">
    <div className={styles.body} ref={containerRef}>
      <canvas className={styles.canvas} ref={canvasRef} width="100" height="100%">
        web-gl required
      </canvas>
      </div>
    </div>
  );
}
