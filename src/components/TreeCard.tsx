import type { Tree } from "../data/Tree";
import { Link } from "react-router";

interface TreeCardProps {
    tree: Tree;
    onWater: (id: number) => void;
}

//Pour le déploiement sur GitHub Pages :
// Charge TOUTES les images du dossier d'un coup, indexées par chemin de fichier.
// eager: true => les images sont importées immédiatement (pas de chargement asynchrone),
// .default => l'URL finale traitée par Vite (copiée dans dist/assets/ au build).
const treeImages = import.meta.glob("../assets/trees/*.jpg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

// Petit helper pour retrouver une image par son nom de fichier (ex: "magnolia-3.jpg")
function getTreeImage(filename: string): string {
    const entry = Object.entries(treeImages).find(([path]) =>
        path.endsWith(`/${filename}`)
    );
    return entry ? entry[1] : "";
}
// déploiement sur Pages ok

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
            <Link to={`/solo-rush-2/garden/${tree.url}`}><h2>{tree.name}</h2></Link>
            <Link to={`/solo-rush-2/garden/${tree.url}`}><img src={getTreeImage(treeImg() ?? "")} alt={`image d'un ${tree.name}`} /></Link>
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