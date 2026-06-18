import { trees } from "../data/data";
import TreeDetails from "../components/TreeDetails"
import { useParams } from "react-router";
import { useState } from "react";

function TreePage() {
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