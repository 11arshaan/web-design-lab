import ComponentCard from "../ui/ComponentCard/ComponentCard";
import HexagonGridFloat from "../components/css/HexagonGrid/HexagonGridFloat";

export default function CSSRoute() {

    return(<div className="container">
        <ComponentCard component={HexagonGridFloat} title="Hexagon Grid" description="A dynamic Hexagon grid that adapts to the layout, maintaining its core form." />
    </div>);
}