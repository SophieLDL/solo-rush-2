import { Link } from "react-router";

function NotFound() {
    return (
        <>
            <h1>Hello from 404 !</h1>
            <p>Vous vous êtes perdus non ?</p>
            <Link to="../solo-rush-2/">Retour à l'accueil</Link>
        </>
    );
}

export default NotFound;