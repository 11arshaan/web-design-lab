import ComponentCard from "../ui/ComponentCard/ComponentCard";
import HexagonGridFloat from "../components/css/HexagonGrid/HexagonGridFloat";


import hexagonpreview from "../assets/images/previews/hexagongrid.png";

export default function CSSRoute() {

    return(<div className="container">
        <ComponentCard component={HexagonGridFloat} preview={hexagonpreview} title="Hexagon Grid" description="A dynamic Hexagon grid that adapts to the layout, maintaining its core form." />
    </div>);
}