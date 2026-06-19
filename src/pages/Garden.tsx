import { useOutletContext } from "react-router";
import TreeCard from "../components/TreeCard";

function Garden() {
    const { trees, handleWater } = useOutletContext();
    return (
        <>
            <h1>Hello from Garden 🌳</h1>
            <p>filtre par rareté et/ou couleurs de fleurs</p>
            <div className="garden-grid">
                {trees.map((tree) => (
                    <TreeCard key={tree.id} tree={tree} onWater={handleWater} />
                ))}</div>

        </>
    );
}

export default Garden;