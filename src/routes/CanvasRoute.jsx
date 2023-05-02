import ComponentCard from "../ui/ComponentCard/ComponentCard";

import tiledlinespreview from "../assets/images/previews/TiledLines.png";
import slantedlinespreview from "../assets/images/previews/SlantedLines.png";



export default function CanvasRoute() {

    return(<div className="container">
        <ComponentCard componentID={"TiledLines"} title={"Tiled Lines"} preview={tiledlinespreview} description={"randomly generated line patterns"} />
        <ComponentCard componentID={"SlantedLines"} title={"Slanted Lines"} preview={slantedlinespreview} description={"randomly generated line patterns"} />
    </div>);
}