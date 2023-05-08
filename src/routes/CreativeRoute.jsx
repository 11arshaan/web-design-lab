import ComponentCard from "../ui/ComponentCard/ComponentCard";

import tiledlinespreview from "../assets/images/previews/TiledLines.png";
import slantedlinespreview from "../assets/images/previews/SlantedLines.png";
import galaxygeneratorpreview from "../assets/images/previews/galaxygenerator.png";
import cursorparticlespreview from "../assets/images/previews/CursorParticles.jpg";

export default function CreativeRoute() {
  return (
    <div className="container">
      <ComponentCard
        componentID={"ThreeGalaxyGenerator"}
        preview={galaxygeneratorpreview}
        title="Galaxy Generator"
        description={"An interactive galaxy generator made with Three.js"}
      />
      <ComponentCard
      componentID={"CursorParticles"}
      title={"Cursor Particles"}
      preview={cursorparticlespreview}
      description={"Particles that follow the cursor. Click and hold to change color."}
      />

      <ComponentCard
        componentID={"TiledLines"}
        title={"Tiled Lines"}
        preview={tiledlinespreview}
        description={"randomly generated line patterns"}
      />
      <ComponentCard
        componentID={"SlantedLines"}
        title={"Slanted Lines"}
        preview={slantedlinespreview}
        description={"randomly generated line patterns"}
      />
    </div>
  );
}
