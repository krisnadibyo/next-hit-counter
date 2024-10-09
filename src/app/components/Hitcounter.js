import React from "react";

import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function Hitcounter() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  hits += 1;
  console.log(hits);
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));
  return hits;
}

export default Hitcounter;
