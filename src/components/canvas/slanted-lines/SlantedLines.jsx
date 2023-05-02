import { useEffect, useState, useRef } from "react";
import "./SlantedLines.scss";

export default function SlantedLines() {
  //set up state for canvas size based on percentage of container
  const [canvasSize, setCanvasSize] = useState({
    width: 420,
    height: 420,
  });

  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);

  function downloadCanvasAsPNG() {
    const canvas = document.getElementById("slanted-lines");
    const fileName="slanted-lines.png";
  
    // Get canvas data as an image/png format
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        const url = URL.createObjectURL(blob);
  
        a.href = url;
        a.download = fileName;
        a.click();
  
        // Release the object URL after the download is complete
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 100);
    }, "image/png", 1); // The third parameter is the quality, which we set to 1 for the highest quality
  }

  function drawLines() {
    const canvas = canvasRef.current;
    var c = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    //clear canvas
    c.clearRect(0, 0, canvasWidth, canvasHeight);

    function slantedLines(x, y, width, height, color = "#ffffff", lineWidth = 1) {
      let leftToRight = Math.random() >= 0.5;

      c.lineWidth = lineWidth;
      c.strokeStyle = color;

      if (leftToRight) {
        c.beginPath();
        c.moveTo(x, y);         
        c.lineTo(x + width/20, y + height/20);
        c.stroke();
      } else {
        c.beginPath();
        c.moveTo(x + width, y);
        c.lineTo(x, y + height);
        c.stroke();
      }
    }

    var divider = 20;
    var xStep = canvasWidth / divider;
    var yStep = canvasHeight / divider;

    for (var x = 0; x < canvasWidth; x += xStep) {
      for (var y = 0; y < canvasHeight; y += yStep) {
        slantedLines(x, y, xStep, yStep);
      }
    }
  }

  

  useEffect(() => {
    drawLines();
  }, [canvasSize]);

  useEffect(() => {
    // set up a resize listener for the canvas
    function handleResize() {
      // get the current size of the canvas container
      const { height} = canvasContainer.current.getBoundingClientRect();
      const newHeight = height * .7;
      // set the canvas size to the current size of the container
      setCanvasSize({ width: newHeight, height: newHeight });
    }

    // call the resize handler once to set up initial canvas size
    handleResize();

    // add the resize listener
    window.addEventListener("resize", handleResize);

    // remove the resize listener when the component is removed from the DOM
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div className="component-view">
      <div ref={canvasContainer} className="slanted-lines-container">
        <canvas ref={canvasRef} id="slanted-lines" width={canvasSize.width} height={canvasSize.height}></canvas>
        <div id="slanted-lines-buttons">
        <button id="slanted-lines-button" type="button" onClick={drawLines}>Generate</button>
        <button id="slanted-lines-button" type="button" onClick={downloadCanvasAsPNG}>Download</button>
        </div>
      </div>
    </div>
  );
}
