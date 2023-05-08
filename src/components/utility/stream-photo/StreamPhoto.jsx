import "./StreamPhoto.scss";
import { useEffect, useState } from "react";
import { startMediaStream, stopMediaStream, takePhoto } from "../../../helper/MediaStream";

export default function StreamPhoto() {
  const [video, setVideo] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
  
    setVideo(document.querySelector("#stream-photo__video"));
    setCanvas(document.querySelector("#stream-photo__canvas"));
    setPhoto(document.querySelector("#stream-photo__photo"));

 // Cleanup function to stop the media stream when the component is unmounted
 return () => {
  if (video && video.srcObject) {
    stopMediaStream(video);
  }
};

  }, []);
 

  function startStream(e){
    e.preventDefault();
    startMediaStream(video);
  }

  function stopStream(e){
    e.preventDefault();
    stopMediaStream(video);
  }

  function capturePhoto(e){
    e.preventDefault();
    takePhoto(video, canvas, photo);
  }

  function clearPhoto(e){
    e.preventDefault();
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }


  return (
    <div className="component-view">
      <div className="stream-photo__container">
        <div id="stream-photo__input">
          <video id="stream-photo__video"></video>

          <div id="stream-photo__controls">
            <button onClick={startStream} id="stream-photo__start">Start</button>
            <button onClick={stopStream} id="stream-photo__stop">Stop</button>
            <button onClick={capturePhoto} id="stream-photo__take-photo">Take Photo</button>
            <button onClick={clearPhoto} id="stream-photo__clear-photo">Clear Photo</button>
          </div>
        </div>

        <div id="stream-photo__output">
          <canvas id="stream-photo__canvas"></canvas>
          <img
            id="stream-photo__photo"
            alt="Press start to begin streaming. Press Take Photo to capture a photo here. No images or streams will be recorded/saved."
          ></img>
        </div>
      </div>
    </div>
  );
}
