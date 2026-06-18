import { trees } from "../data/data";
import TreeDetails from "../components/TreeDetails"
import { useParams } from "react-router";

function TreesDetails() {
    const { url } = useParams()

    const tree = trees.find((t) => t.url === url);

    if (!tree) {
        return (
            <>
                <h1>Arbre introuvable</h1>
            </>
        )
            ;
    }

    return <TreeDetails tree={tree} />;
}

export default TreesDetails;