import TreeCard from "../components/TreeCard";
import { trees } from "../data/data";


function Garden() {
    return (
        <>
            <h1>Hello from Garden !</h1>
            <p>filtre par rareté et/ou couleurs de fleurs</p>
            {trees.map((tree) => (
                <TreeCard key={tree.id} tree={tree} />
            ))}

        </>
    );
}

export default Garden;