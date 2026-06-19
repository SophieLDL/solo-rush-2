import type { Tree } from "../data/Tree";
import { Link } from "react-router";

interface TreeCardProps {
    tree: Tree;
    onWater: (id: number) => void;
}


function TreeCard({ tree, onWater }: TreeCardProps) {
    return (
        <div className={`tree-card rarity-${tree.rarity.toLowerCase().replace("é", "e").replace("è", "e")}`}>
            <span className="rarity-badge">{tree.rarity}</span>
            <Link to={`/garden/${tree.url}`}><h2>{tree.name}</h2></Link>
            <Link to={`/garden/${tree.url}`}><img src={tree.image} alt={`image d'un ${tree.name}`} /></Link>
            <p><em>{tree.scientificName}</em></p>
            <p>Fleurs : {tree.flowerColor}</p>
            <p>Niveau : {tree.level}</p>
            <button onClick={() => onWater(tree.id)}>Arroser 💦</button>
        </div>
    );
}
export default TreeCard;