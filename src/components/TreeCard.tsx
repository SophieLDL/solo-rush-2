import type { Tree } from "../data/Tree";

interface TreeCardProps {
    tree: Tree;
}


function TreeCard({ tree }: TreeCardProps) {
    return (
        <div className={`tree-card rarity-${tree.rarity.toLowerCase().replace("é", "e").replace("è", "e")}`}>
            <span className="rarity-badge">{tree.rarity}</span>
            <h2>{tree.name}</h2>
            <img src={tree.image} alt={`image d'un ${tree.name}`} />
            <p><em>{tree.scientificName}</em></p>
            <p>Fleurs : {tree.flowerColor}</p>
            <p>Niveau : {tree.level}</p>
        </div>
    );
}
export default TreeCard;