import type { Tree } from "../data/Tree";

interface TreeDetailsProps {
    tree: Tree;
}

function TreeDetails({ tree }: TreeDetailsProps) {
    return (
        <>
            <h1>Détails</h1>
            <h2>{tree.name} <em>({tree.scientificName})</em></h2>
            <img style={{ width: "50%" }} src={tree.image} alt={`image d'un ${tree.name}`} />
            <p>Couleur des fleurs : {tree.flowerColor}.</p>
            <p>{tree.rarity}</p>
            <p>Niveau {tree.level} || {tree.xp} XP</p>
            <p>Prochain niveau : {tree.xpToNextLevel}</p>
            <p>{tree.growthStage}</p>
            <button>Arroser</button>
        </>
    );
}

export default TreeDetails;