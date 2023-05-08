// START STREAM //
export function startMediaStream(video) {
  const constraints = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
    });
}

// STOP STREAM //

export function stopMediaStream(video) {
  video.srcObject.getTracks().forEach((track) => track.stop());
}

//// TAKE PHOTO ////
// takes a photo from the video stream
export function takePhoto(video, canvas = null, photo, scaleFactor = 2) {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.width = video.clientWidth * scaleFactor; // Scale the width
    canvas.height = video.clientHeight * scaleFactor; // Scale the height
  }

  const context = canvas.getContext("2d");

  // Calculate the aspect ratio of the video element
  const videoElementAspectRatio = video.clientWidth / video.clientHeight;

  // Calculate the dimensions of the source video to maintain the video element's aspect ratio
  let sourceWidth = video.videoWidth;
  let sourceHeight = sourceWidth / videoElementAspectRatio;

  if (sourceHeight > video.videoHeight) {
    sourceHeight = video.videoHeight;
    sourceWidth = sourceHeight * videoElementAspectRatio;
  }

  // Calculate the position to crop the source video to maintain the video element's aspect ratio
  const sourceX = (video.videoWidth - sourceWidth) / 2;
  const sourceY = (video.videoHeight - sourceHeight) / 2;

  // Draw the cropped video with the correct dimensions and position onto the canvas
  context.drawImage(
    video,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight, // source dimensions and position
    0,
    0,
    canvas.width,
    canvas.height // destination dimensions and position
  );
  photo.setAttribute("src", canvas.toDataURL("image/png"));
}
