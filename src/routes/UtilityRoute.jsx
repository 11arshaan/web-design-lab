import ComponentCard from "../ui/ComponentCard/ComponentCard";
import FollowPointer from "../components/utility/FollowPointer/FollowPointer";

export default function UtilityRoute() {

    return(
        <div className="container">
            <ComponentCard component={FollowPointer} title="Follow Pointer" description="This uses react's useState hook to capture the pointer position. Any custom element or graphic can then be 'attached' to the pointer"/>
        </div>
    )
}