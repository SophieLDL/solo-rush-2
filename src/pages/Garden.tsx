import { useOutletContext } from "react-router";
import TreeCard from "../components/TreeCard";
import type { Tree } from "../data/Tree";

interface GardenOutlets {
    trees: Array<Tree>;
    handleWater: (id: number) => void;
    handleReset: (id: number) => void;
    handleMax: (id: number) => void;
}

function Garden() {
    const { trees, handleWater, handleReset, handleMax }: GardenOutlets = useOutletContext();

    function handleAllReset() {
        trees.map((tree) => (
            handleReset(tree.id)
        ))
    }

    function handleAllMax() {
        trees.map((tree) => (
            handleMax(tree.id)
        ))
    }

    return (
        <>
            <h1>Hello from Garden 🌳</h1>
            <p>filtre par rareté et/ou couleurs de fleurs</p>
            <button onClick={handleAllMax}>LevelMax</button> <button onClick={handleAllReset}>LevelMin</button>
            <div className="garden-grid">
                {trees.map((tree) => (
                    <TreeCard key={tree.id} tree={tree} onWater={handleWater} />
                ))}</div>

        </>
    );
}

export default Garden;