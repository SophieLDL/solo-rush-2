import { Link } from "react-router";
import { trees } from "../data/data";

function Home() {
    return (
        <>
            <h1>Bienvenue dans le jardin forêt !</h1>
            <br />
            <p>Actuellement, vous pouvez vous occuper de <em>{trees.length}</em> arbres.</p>
            <p>A vous de faire ce qu'il faut pour les faire grandir, et récolter leurs fleurs, parce que les fleurs, c'est joli 🥰 </p>
            <p>Chaque arbre est accessible via le menu déroulant en haut de la page.</p>
            <br />
            <p>Ou bien tous en même temps, juste ici :</p>
            <Link to="/solo-rush-2/garden">Commencez à jardiner</Link>
        </>
    );
}

export default Home;