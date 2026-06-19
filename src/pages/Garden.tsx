import { useOutletContext } from "react-router";
import TreeCard from "../components/TreeCard";
import type { Tree } from "../data/Tree";

interface GardenOutlets {
    trees: Array<Tree>;
    handleWater: (id: number) => void;
    handleReset: (id: number) => void;
    handleMax: (id: number) => void;
}

function Garden() {
    const { trees, handleWater, handleReset, handleMax }: GardenOutlets = useOutletContext();

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

    return (
        <>
            <h1>Garden 🌳</h1>
            <p>Dans le jardin, vous pouvez arroser les arbres, pour leur faire gagner de l'expérience. <br /> Lorsqu'il a accumulé assez d'expérience, il monte un niveau ! Passant de <em>Jeune pousse</em> à <em>Jeune Arbre</em>, puis à <em>Adulte</em>.</p>
            <p>Allez voir un arbre pour avoir des détails, et pouvoir cueillir une fleur !</p>
            <p>Vous pouvez passer tous les arbres niveau maximum ou minimum grâce aux boutons ci-dessous</p>
            <br />
            <button onClick={handleAllMax}>Niveaux Max</button> <button onClick={handleAllReset}>Niveaux Min</button>
            <div className="garden-grid">
                {trees.map((tree) => (
                    <TreeCard key={tree.id} tree={tree} onWater={handleWater} />
                ))}</div>

        </>
    );
}

export default Garden;