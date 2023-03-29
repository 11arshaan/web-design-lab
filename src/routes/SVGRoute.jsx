import {
  SpinningLoadingIcon1,
  SpinningLoadingIcon2,
} from "../components/svg/svg-loading-icons/SVGLoadingIcon";
import ComponentCard from "../ui/ComponentCard/ComponentCard";
import { SVGSketch } from "../components/svg/sketches/svg-sketch";
import { SVGLoadingIcon } from "../components/svg/svg-loading-icons/SVGLoadingIcon";

export function SVGRoute(props) {
  return (
    <div className="container">
      <ComponentCard
        component={SVGLoadingIcon}
        title="SVG Loading Icons"
        description="Loading icons made with SVG for use in app loading states."
      />
    </div>
  );
}
