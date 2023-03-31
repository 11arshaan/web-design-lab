import ComponentCard from "../ui/ComponentCard/ComponentCard";
import { SVGLoadingIcon } from "../components/svg/svg-loading-icons/SVGLoadingIcon";

import svgloadingiconspreview from "../assets/images/previews/svgloadingicons.png";

export function SVGRoute(props) {
  return (
    <div className="container">
      <ComponentCard
        componentID={"SVGLoadingIcon"}
        preview={svgloadingiconspreview}
        title="SVG Loading Icons"
        description="Loading icons made with SVG for use in app loading states."
        
      />
    </div>
  );
}
