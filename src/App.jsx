import { Suspense } from "react";
import "./App.css";
import Countries from "./Countries";
const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json());

function App() {
  return (
    <>
      <h1>React on the gooooo</h1>
      <Suspense fallback={<p>Nadir bhai loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
