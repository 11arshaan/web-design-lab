import { useState, useEffect, useRef } from "react";
import styles from "./CursorParticles.module.scss"

export default function CursorParticles() {
  const ref = useRef(null);
  const container = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 300, height: 300});

  useEffect(() => {
    //canvas setup
    const canvas = ref.current;
    const c = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    //cursor
    let cursorX = 0;
    let cursorY = 0;
    let cursorDown = false;

    //particles
    const particles = [];
    const particleCount = 2;
    const particleSpeed = 1;
    const particleSize = 3;

    //particle class
    class Particle {
      constructor(x, y, opacity) {
        this.x = x;
        this.y = y;
        this.opacity = opacity;
        this.directionX = Math.random() * particleSpeed - particleSpeed / 2;
        this.directionY = Math.random() * particleSpeed - particleSpeed / 2;
        this.color = cursorDown ? "125, 155, 255," : "255, 155, 125,";
      }
      draw() {
        c.strokeStyle = `rgba(${this.color} ${this.opacity})`;
        c.beginPath();
        c.arc(this.x, this.y, particleSize, 0, 2 * Math.PI);
        c.stroke();
      }
      update() {
        this.x += this.directionX;
        this.y += this.directionY;
        this.opacity = Math.max(0, this.opacity - 0.008);

        // Return false if the particle's opacity is zero or less
        if (this.opacity <= 0) {
          return false;
        }

        return true;
      }
    }

    canvas.addEventListener(
      "mousemove",
      throttle((e) => {
        cursorX = e.offsetX;
        cursorY = e.offsetY;
        createParticles(cursorX, cursorY, particleCount);
      }, 16)
    ); // Throttle the event listener, 16ms is about 60fps

    function createParticles(x, y, count) {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, 1));
      }
    }

    canvas.addEventListener("mousedown", () => {
      cursorDown = true;
    });

    canvas.addEventListener("mouseup", () => {
      cursorDown = false;
    });

    function animate() {
      c.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].update() === false) {
          particles.splice(i, 1);
          i--; // Decrement the index to account for the removed particle
        } else {
          particles[i].draw();
        }
      }

      requestAnimationFrame(animate);
    }

    function throttle(fn, wait) {
      let time = Date.now();
      return function (e) {
        if (time + wait - Date.now() < 0) {
          fn(e);
          time = Date.now();
        }
      };
    }

    requestAnimationFrame(animate);
  }, [canvasSize]);

  useEffect(() => {
    function updateDimensions() {
      const newWidth = container.current.clientWidth;
      const newHeight = container.current.clientHeight;
    
      setCanvasSize({width: newWidth, height: newHeight});
      ref.current.width = newWidth;
      ref.current.height = newHeight;
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div  className="component-view">
    <div ref={container} className={styles.cursorparticles}>
      <canvas
        ref={ref}
        id="cursorparticles"
        width={canvasSize.width}
        height={canvasSize.height}
      ></canvas>
      </div>
    </div>
  );
}
