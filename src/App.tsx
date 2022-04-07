import React from "react";

import Grid from "./components/Grid";
import { GlobalStyle } from "./styles/globalStyle";

function App(): JSX.Element {
  // normally, in a real project, we have a container folder, that has the router and all the pages defined inside
  // but for this project, we will display the component directly
  return (
    <>
      <GlobalStyle />
      <Grid />
    </>
  );
}

export default App;
