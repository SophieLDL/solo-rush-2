import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import { trees as initialTrees } from "../data/data";


function App() {
  const [trees, setTrees] = useState(initialTrees);
  // const [level, setLevel] = useState(initialTrees.level);
  // const [xp, setXp] = useState(initialTrees.xp);

  function handleWater(id: number) {
    setTrees(prev =>
      prev.map(tree => {
        if (tree.id !== id) return tree;

        // Cas 1 : l'arbre est déjà à 100/100 → on clique pour LEVEL UP
        if (tree.xp >= 100 && tree.level < 3) {
          return {
            ...tree,
            level: tree.level + 1,
            xp: 0,
          };
        }

        // Cas 2 : sinon on ajoute simplement 50 XP, plafonné à 100
        const newXp = Math.min(tree.xp + 50, 100);
        return {
          ...tree,
          xp: newXp,
        };
      })
    );
  }

  function handleReset(id: number) {
    setTrees(prev =>
      prev.map(tree => {
        if (tree.id !== id) return tree;

        return {
          ...tree,
          level: 1,
          xp: 0,
        };
      })
    );
  }

  function handleMax(id: number) {
    setTrees(prev =>
      prev.map(tree => {
        if (tree.id !== id) return tree;

        return {
          ...tree,
          level: 3,
          xp: 100,
        };
      })
    );
  }

  return (
    <>
      <nav>
        <Link to="/solo-rush-2/">Home</Link>
        <div className="dropdown">
          <Link to="/solo-rush-2/garden" className="garden">Garden</Link><i className="fa fa-caret-down"></i>
          <div className="dropdowncontent">
            {trees.map((tree) => (
              <Link key={tree.id} to={`/solo-rush-2/garden/${tree.url}`}>{tree.name}</Link>
            ))}
          </div>
        </div>
      </nav >
      <main>
        <Outlet context={{ trees, setTrees, handleWater, handleReset, handleMax }} />
      </main>
    </>
  )
}

export default App;
