import type { Tree } from "../data/Tree";
import { Link } from "react-router";

interface TreeCardProps {
    tree: Tree;
    onWater: (id: number) => void;
}


function TreeCard({ tree, onWater }: TreeCardProps) {
    function treeImg() {
        if (tree.level == 1) {
            return `${tree.url}-1.jpg`
        }
        else if (tree.level == 2) {
            return `${tree.url}-2.jpg`
        }
        else if (tree.level == 3) {
            return `${tree.url}-3.jpg`
        }
    }
    return (
        <div className={`tree-card rarity-${tree.rarity.toLowerCase().replace("é", "e").replace("è", "e")}`}>
            <span className="rarity-badge">{tree.rarity}</span>
            <Link to={`/garden/${tree.url}`}><h2>{tree.name}</h2></Link>
            <Link to={`/garden/${tree.url}`}><img src={`../src/assets/trees/${treeImg()}`} alt={`image d'un ${tree.name}`} /></Link>
            <p><em>{tree.scientificName}</em></p>
            <p>Fleurs : {tree.flowerColor}</p>
            <p>Niveau : {tree.level}</p>
            <div className="xp-bar">
                <div className="xp-bar-fill" style={{ width: `${tree.xp}%` }} />
            </div>
            <p className="xp-label">{tree.xp}/100 XP</p>
            {tree.level < 3 || tree.xp < 100 ? <button onClick={() => onWater(tree.id)}>{tree.xp === 100 && tree.level < 3 ? "🎉" : "💦"}</button> : "Niveau max 🥳"}
        </div>
    );
}
export default TreeCard;