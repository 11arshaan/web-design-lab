import p5 from "p5";
import { useRef, useEffect, useState } from "react";

export default function P5Sketch() {
  const ref = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  // This effect sets the container dimensions and adds the resize event listener
  useEffect(() => {
    function updateDimensions() {
      setContainerDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // This effect creates the p5 sketch when containerDimensions are updated
  useEffect(() => {
    if (containerDimensions.width === 0 || containerDimensions.height === 0) {
      return;
    }

    function sketch(p) {
      p.setup = () => {
        p.createCanvas(containerDimensions.width, containerDimensions.height);
      };

      p.draw = () => {
        p.background(220);
        const ellipse = p.ellipse(p.width/2, p.height/2, 100, 100);
        
        
      };
    }

    const sketchInstance = new p5(sketch, ref.current);

    return () => {
      sketchInstance.remove();
    };
  }, [containerDimensions]);

  return <div ref={ref} className="component-view"></div>;
}
