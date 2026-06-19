import TreeDetails from "../components/TreeDetails"
import { useOutletContext, useParams } from "react-router";
import { useState } from "react";

function TreePage() {
    const { trees, handleWater } = useOutletContext();
    const { url } = useParams()

    const tree = trees.find((tree) => tree.url === url);

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

export default TreePage;