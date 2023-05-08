import ComponentCard from "../ui/ComponentCard/ComponentCard";
import HexagonGridFloat from "../components/css/HexagonGrid/HexagonGridFloat";

import hexagonpreview from "../assets/images/previews/hexagongrid.png";
import svgloadingiconspreview from "../assets/images/previews/svgloadingicons.png";

export default function UIRoute() {
  return (
    <div className="container">
      <ComponentCard
        componentID={"HexagonGridFloat"}
        preview={hexagonpreview}
        title="Hexagon Grid"
        description="A dynamic Hexagon grid that adapts to the layout, maintaining its core form."
      />
      <ComponentCard
        componentID={"SVGLoadingIcon"}
        preview={svgloadingiconspreview}
        title="SVG Loading Icons"
        description="Loading icons made with SVG for use in app loading states."
      />
     
    </div>
  );
}
