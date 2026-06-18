import { useState } from "react";
import type { Tree } from "../data/Tree";

interface TreeDetailsProps {
    tree: Tree;
}

function TreeDetails({ tree }: TreeDetailsProps) {
    // Je veux que quand on appuie sur le bouton "arroser"
    // l'XP monte de 50 en 50.
    // quand l'"xpToNextLevel" atteint 0, afficher l'image suivante et ainsi de suite jusqu'au niveau maximum (3 pour le moment)
    // quand l'XP atteint le "niveau max", afficher un bouton "cueillir la fleur"
    // quand je clique sur le bouton de la fleur, afficher l'image d'une fleur 
    const [level, setLevel] = useState(tree.level);
    const [xp, setXp] = useState(tree.xp);

    function handleWater() {
        const newXp = xp + 50;
        if (xp === 100 && level < 3) {
            setLevel(level + 1);
            setXp(0)
        }
        else if (level < 3 && newXp <= 100) {
            setXp(newXp);
        }
        else if (level === 3) {
            setXp(newXp);
        }
    }

    function treeGrowth(level: number) {
        if (level == 1) {
            return "Jeune pousse"
        }
        else if (level == 2) {
            return "Jeune arbre"
        }
        else if (level == 3) {
            return "Bel Arbre"
        }
    }

    function treeImg(level: number) {
        if (level == 1) {
            return `${tree.url}-1.jpg`
        }
        else if (level == 2) {
            return `${tree.url}-2.jpg`
        }
        else if (level == 3) {
            return `${tree.url}-3.jpg`
        }
    }

    return (
        <>
            <h1>Détails</h1>
            <h2>{tree.name} <em>({tree.scientificName})</em></h2>
            <img style={{ width: "50%" }} src={`../src/assets/trees/${treeImg(level)}`} alt={`image d'un ${tree.name}`} />
            <p>Couleur des fleurs : {tree.flowerColor}.</p>
            <p>{tree.rarity}</p>
            <p>Niveau {level} || {xp}/100 XP</p>
            <p>XP avant le prochain niveau : {100 - xp}</p>
            <p>Croissance de l'arbre : {treeGrowth(level)}</p>
            <button onClick={handleWater}>Arroser</button>
        </>
    );
}

export default TreeDetails;