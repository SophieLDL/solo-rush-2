import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import { trees } from "../data/data";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="/garden" className="garden">Garden</Link><i className="fa fa-caret-down"></i>
          <div className="dropdowncontent">
            {trees.map((tree) => (
              <Link to={`/garden/${tree.url}`}>{tree.name}</Link>
            ))}
          </div>
        </div>
      </nav >
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
