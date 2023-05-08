import ComponentCard from "../ui/ComponentCard/ComponentCard";
import FollowPointer from "../components/utility/FollowPointer/FollowPointer";

import followpointerpreview from "../assets/images/previews/followpointer.png";

export default function UtilityRoute() {
  return (
    <div className="container">
      <ComponentCard
        componentID={"FollowPointer"}
        preview={followpointerpreview}
        title="Follow Pointer"
        description="This uses react's useState hook to capture the pointer position. Any custom element or graphic can then be 'attached' to the pointer"
      />
      
    </div>
  );
}
