import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { useRef, useEffect, useState } from "react";

export default function GalaxyGenerator() {
  const canvasRef = useRef(null);
  const backgroundRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    canvasRef.current.width = backgroundRef.current.clientWidth;
    canvasRef.current.height = backgroundRef.current.clientHeight;
    const canvas = canvasRef.current;
    const gui = new dat.GUI({ width: 300, container: backgroundRef.current });
    gui.domElement.setAttribute(
      "style",
      "position: absolute; top: 10; right: 10; border: 1px solid white; z-index: 1000;"
    );

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.width / canvasRef.current.height,
      0.1,
      100
    );
    camera.position.x = 7;
    camera.position.y = 7;
    camera.position.z = 7;
    scene.add(camera);

    // CONTROLS
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    //RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(canvas.width, canvas.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // PARAMETERS
    const parameters = {};
    parameters.count = 10000;
    parameters.size = 0.01;
    parameters.radius = 10;
    parameters.branches = 3;
    parameters.spin = 0.2;
    parameters.randomness = 0;
    parameters.tightness = 2; //randomness power
    parameters.insideColor = "#ff6030";
    parameters.outsideColor = "#1b3984";
    parameters.motion = true;

    let geometry = null;
    let positions = null;
    let material = null;
    let points = null;
    let colors = null;

    gui
      .add(parameters, "count")
      .min(100)
      .max(100000)
      .step(10)
      .onFinishChange(generateGalaxy);
    gui
      .add(parameters, "size")
      .min(0.001)
      .max(0.1)
      .step(0.001)
      .onFinishChange(generateGalaxy);
    window.addEventListener("dblclick", generateGalaxy);
    gui
      .add(parameters, "radius")
      .min(0.01)
      .max(20)
      .step(0.01)
      .onFinishChange(generateGalaxy);
    gui
      .add(parameters, "branches")
      .min(2)
      .max(9)
      .step(1)
      .onFinishChange(generateGalaxy);

    gui
      .add(parameters, "spin")
      .min(-1)
      .max(1)
      .step(0.001)
      .onFinishChange(generateGalaxy);

    gui
      .add(parameters, "randomness")
      .min(0)
      .max(5)
      .step(0.001)
      .onFinishChange(generateGalaxy);

    gui
      .add(parameters, "tightness") //randomness power
      .min(1)
      .max(10)
      .step(0.001)
      .onFinishChange(generateGalaxy);

    gui.addColor(parameters, "insideColor").onFinishChange(generateGalaxy);
    gui.addColor(parameters, "outsideColor").onFinishChange(generateGalaxy);
    gui.add(parameters, "motion").onFinishChange(generateGalaxy);

    function generateGalaxy() {
      if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      positions = new Float32Array(parameters.count * 3);
      colors = new Float32Array(parameters.count * 3);
      const colorInside = new THREE.Color(parameters.insideColor);
      const colorOutside = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.radius;
        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
        const spin = radius * parameters.spin;

        const randomX =
          Math.pow(Math.random(), parameters.tightness) *
          (Math.random() < 0.5 ? 1 : -1);
        const randomY =
          Math.pow(Math.random(), parameters.tightness) *
          (Math.random() < 0.5 ? 1 : -1);
        const randomZ =
          Math.pow(Math.random(), parameters.tightness) *
          (Math.random() < 0.5 ? 1 : -1);

        positions[i3] = Math.cos(branchAngle + spin) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spin) * radius + randomZ;

        let mixColor = colorInside.clone();
        mixColor = mixColor.lerp(colorOutside, radius / parameters.radius);

        colors[i3] = mixColor.r;
        colors[i3 + 1] = mixColor.g;
        colors[i3 + 2] = mixColor.b;
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      });
      points = new THREE.Points(geometry, material);
      scene.add(points);
    }

    function resize() {
      // Update sizes
      canvas.width = backgroundRef.current.width;
      canvas.height = backgroundRef.current.height;

      // Update camera
      camera.aspect = canvas.current.width.width / canvas.current.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(canvas.width, canvas.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    generateGalaxy();

    window.addEventListener("resize", resize);
    window.addEventListener("dblclick", generateGalaxy);

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      if (parameters.motion) {
        points.rotation.y = elapsedTime * (parameters.spin > 0 ? 0.1 : -0.1);
      }
      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    const clock = new THREE.Clock();

    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("dblclick", generateGalaxy);
      material.dispose();
      geometry.dispose();
      scene.remove(points);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="component-view">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
