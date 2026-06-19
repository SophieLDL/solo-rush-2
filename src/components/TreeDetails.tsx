import { useState } from "react";
import type { Tree } from "../data/Tree";
import { useOutletContext } from "react-router";

interface TreeDetailsProps {
    tree: Tree;
}

interface TreeDetailsOutlet {
    handleWater: (id: number) => void;
    handleReset: (id: number) => void;
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

function TreeDetails({ tree }: TreeDetailsProps) {
    const { handleReset, handleWater }: TreeDetailsOutlet = useOutletContext();

    // const { url } = useParams();

    // Je veux que quand on appuie sur le bouton "arroser"
    // l'XP monte de 50 en 50.
    // quand l'XP atteint 100, recliquer pour faire passer un niveau et afficher l'image suivante et ainsi de suite jusqu'au niveau maximum (3)
    // quand level atteint 3, afficher un bouton "cueillir la fleur"
    // quand je clique sur le bouton de la fleur, afficher l'image d'une fleur 

    // const [level, setLevel] = useState(tree.level);
    // const [xp, setXp] = useState(tree.xp);

    const [flowerPicked, setFlowerPicked] = useState(false);

    function treeGrowth() {
        if (tree.level == 1) {
            return "Jeune pousse"
        }
        else if (tree.level == 2) {
            return "Jeune arbre"
        }
        else if (tree.level == 3) {
            return "Adulte"
        }
    }

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


    // function handleProgression() {
    //     setFlowerPicked(false);
    //     setLevel(1)
    //     setXp(0);
    // }

    const rarityClass = tree.rarity.toLowerCase().replace("é", "e").replace("è", "e");

    return (
        <div className={`tree-detail rarity-${rarityClass}`}>
            <div className="tree-detail-header">
                <span className="rarity-badge">{tree.rarity}</span>
                <h1>{tree.name} <em>({tree.scientificName})</em></h1>
            </div>
            <img src={getTreeImage(treeImg() ?? "")} alt={`image d'un ${tree.name}`} />
            <p>Couleur des fleurs : {tree.flowerColor}.</p>
            <p>Croissance : {treeGrowth()}</p>
            <p>Niveau : {tree.level} — {tree.xp}/100 XP</p>
            {tree.level < 3 || tree.xp < 100 ? <button onClick={() => handleWater(tree.id)}>{tree.xp === 100 && tree.level < 3 ? "LevelUp 🎉" : "Arroser 💦"}</button> : "Niveau max 🥳  "}
            {tree.level === 3 && tree.xp === 100 && <button onClick={() => { setFlowerPicked(true) }}>Cueillir 🌸</button>}
            {tree.level === 3 && tree.xp === 100 && <button onClick={() => { setFlowerPicked(false); handleReset(tree.id); }}>Replanter</button>}
            {flowerPicked && (
                <img src={getTreeImage(`${tree.url}-flower.jpg`)} alt={`fleur d'un ${tree.name}`} />
            )}
        </div>
    );
}

export default TreeDetails;