import { useOutletContext } from "react-router";
import TreeCard from "../components/TreeCard";
import type { Tree } from "../data/Tree";
import { useState } from "react";

interface GardenOutlets {
    trees: Array<Tree>;
    handleWater: (id: number) => void;
    handleReset: (id: number) => void;
    handleMax: (id: number) => void;
}

type SortDirection = "asc" | "desc";

function Garden() {
    const { trees, handleWater, handleReset, handleMax }: GardenOutlets = useOutletContext();

    const [sortBy, setSortBy] = useState("name");
    const [research, setResearch] = useState("");
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    function handleAllReset() {
        trees.map((tree) => (
            handleReset(tree.id)
        ))
    }

    function handleAllMax() {
        trees.map((tree) => (
            handleMax(tree.id)
        ))
    }

    const rarityOrder = {
        Commun: 1,
        Rare: 2,
        Épique: 3,
        Légendaire: 4,
    };

    const direction = sortDirection === "asc" ? 1 : -1;
    const filteredTrees = [...trees].filter(tree => tree.flowerColor.toLowerCase().includes(research.toLowerCase()));
    const visibleTrees = getSortedTrees(filteredTrees);

    function getSortedTrees(filteredTrees: Tree[]) {
        if (sortBy === "name") {
            filteredTrees.sort((a, b) => (a.name.localeCompare(b.name)) * direction)
        }
        else if (sortBy === "level") {
            filteredTrees.sort((a, b) => (a.level - b.level) * direction)
        }
        else if (sortBy === "rarity") {
            filteredTrees.sort((a, b) => (rarityOrder[a.rarity] - rarityOrder[b.rarity]) * direction)
        }
        else if (sortBy === "flowerColor") {
            filteredTrees.sort((a, b) => (a.flowerColor.localeCompare(b.flowerColor)) * direction)
        }
        return filteredTrees;
    }

    return (
        <>
            <h1>Garden 🌳</h1>
            <p>Dans le jardin, vous pouvez arroser les arbres, pour leur faire gagner de l'expérience. <br /> Lorsqu'il a accumulé assez d'expérience, il monte un niveau ! Passant de <em>Jeune pousse</em> à <em>Jeune Arbre</em>, puis à <em>Adulte</em>.</p>
            <p>Allez voir un arbre pour avoir des détails, et pouvoir cueillir une fleur !</p>
            <p>Vous pouvez passer tous les arbres niveau maximum ou minimum grâce aux boutons ci-dessous</p>

            <br />

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="" selected disabled>Trier par ...</option>
                <option value="name">Nom</option>
                <option value="level">Niveau</option>
                <option value="rarity">Rareté</option>
                <option value="flowerColor">Couleur des fleurs</option>
            </select>
            <button onClick={() => { setSortDirection(sortDirection === "asc" ? "desc" : "asc") }}>{sortDirection === "asc" ? "↑" : "↓"}</button>

            <br />
            <br />

            <button onClick={handleAllMax}>Niveaux Max</button> <button onClick={handleAllReset}>Niveaux Min</button>
            <search><input type="search" value={research} onChange={(e) => setResearch(e.target.value)} placeholder="Filtrer par couleur de fleur" /></search>
            <div className="garden-grid">
                {visibleTrees.map((tree) => (
                    <TreeCard key={tree.id} tree={tree} onWater={handleWater} />
                ))}</div>

        </>
    );
}

export default Garden;