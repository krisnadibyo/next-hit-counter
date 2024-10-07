"use client";
import React, { useState } from "react";

function Censored({ children }) {
  const [isCensored, setIsCensored] = useState(true);

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {children}
    </button>
  );
}

export default Censored;
