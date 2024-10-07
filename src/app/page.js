import React from "react";
import Hitcounter from "./components/Hitcounter";
import Censored from "./components/Censored";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <Censored>
          <Hitcounter />
        </Censored>
      </p>
    </main>
  );
}

export default Home;
