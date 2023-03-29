import ComponentCard from "../ui/ComponentCard/ComponentCard";
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
