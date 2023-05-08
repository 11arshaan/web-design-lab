import ComponentCard from "../ui/ComponentCard/ComponentCard";


import followpointerpreview from "../assets/images/previews/followpointer.png";
import streamphotopreview from "../assets/images/previews/streamphoto.jpg";

export default function UtilityRoute() {
  return (
    <div className="container">
      <ComponentCard
        componentID={"FollowPointer"}
        preview={followpointerpreview}
        title="Follow Pointer"
        description="This uses react's useState hook to capture the pointer position. Any custom element or graphic can then be 'attached' to the pointer"
      />
      <ComponentCard
        componentID={"StreamPhoto"}
        preview={streamphotopreview}
        title="Capture Stream Photo"
        description="A simple component that captures a photo from the user's webcam and displays it on the screen"
      />
      
    </div>
  );
}
