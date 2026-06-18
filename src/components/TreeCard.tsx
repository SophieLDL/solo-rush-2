import type { Tree } from "../data/Tree";

interface TreeCardProps {
    tree: Tree;
}


function TreeCard({ tree }: TreeCardProps) {
    return (
        <>
            <h1>{tree.name}</h1>
            <img style={{ width: "50%" }} src={tree.image} alt={`image d'un ${tree.name}`} />
            <p>Nom scientifique : {tree.scientificName}</p>
            <p>Couleur des fleurs : {tree.flowerColor}</p>
            <p>{tree.rarity}</p>
        </>
    )
}
export default TreeCard;