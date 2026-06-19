import { Link } from "react-router";
import { trees } from "../data/data";

function Home() {
    return (
        <>
            <h1>Bienvenue dans le jardin forêt !</h1>
            <p>Présentation du projet</p>
            <p>Actuellement, vous pouvez vous occuper de {trees.length} arbres.</p>
            <p>Chaque arbre est accessible en haut de la page.</p>
            <p>Et pour tous les voir, c'est ici :</p>
            <Link to="/solo-rush-2/garden">Commencez à jardiner</Link>
        </>
    );
}

export default Home;