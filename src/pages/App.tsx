import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        <Link to="/garden/:id">Tree Details</Link>
        <Link to="*">Not Found</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
