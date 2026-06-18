import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import { trees } from "../data/data";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        {trees.map((tree) => (
          <Link to={`/garden/${tree.url}`}>{tree.name}</Link>
        ))}
      </nav >
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
