import { useState } from "react";
import type { Tree } from "../data/Tree";

interface TreeDetailsProps {
    tree: Tree;
}

function TreeDetails({ tree }: TreeDetailsProps) {
    // Je veux que quand on appuie sur le bouton "arroser"
    // l'XP monte de 50 en 50.
    // quand l'XP atteint 100, recliquer pour faire passer un niveau et afficher l'image suivante et ainsi de suite jusqu'au niveau maximum (3)
    // quand level atteint 3, afficher un bouton "cueillir la fleur"
    // quand je clique sur le bouton de la fleur, afficher l'image d'une fleur 
    const [level, setLevel] = useState(tree.level);
    const [xp, setXp] = useState(tree.xp);

    const [flowerPicked, setFlowerPicked] = useState(false);

    function handleWater() {
        const newXp = xp + 50;
        if (xp === 100 && level < 3) {
            setLevel(level + 1);
            setXp(0)
        }
        else if (level < 3 && newXp <= 100) {
            setXp(newXp);
        }
        else if (level === 3 && newXp <= 100) {
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
            return "Adulte"
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


    function handleProgression() {
        setFlowerPicked(false);
        setLevel(1)
        setXp(0);
    }

    return (
        <>
            <h1>Détails</h1>
            <h2>{tree.name} <em>({tree.scientificName})</em></h2>
            <img style={{ height: "500px" }} src={`../src/assets/trees/${treeImg(level)}`} alt={`image d'un ${tree.name}`} />
            <p>Couleur des fleurs : {tree.flowerColor}.</p>
            <p>Rareté : {tree.rarity}</p>
            <p>Niveau actuel : {level} || {xp}/100 XP</p>
            <p>XP avant le prochain niveau : {100 - xp}</p>
            <p>Croissance de l'arbre : {treeGrowth(level)}</p>
            {level < 3 || xp < 100 ? <button onClick={handleWater}>{xp === 100 && level < 3 ? "LevelUp 🎉" : "Arroser 💦"}</button> : "Niveau max 🥳"}
            {level === 3 && xp === 100 && <button onClick={() => { setFlowerPicked(true) }}>Cueillir 🌸</button>}
            {level === 3 && xp === 100 && <button onClick={handleProgression}>Replanter</button>}
            <br />
            <br />
            {flowerPicked && (
                <img style={{ height: "300px" }} src={`../src/assets/trees/${tree.url}-flower.jpg`} alt={`fleur d'un ${tree.name}`} />
            )}
        </>
    );
}

export default TreeDetails;