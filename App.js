import React from "react";

import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

import PublisherList from "./components/PublisherList";
import GameList from "./components/GameList";

const theme = {
  light: {
    mainColor: "#1f2833",
    headerTextColor: "#66FCF1",
    descriptiveTextColor: "#c5c6c7",
    borderColor: "#45a29e",
  },
  dark: {
    mainColor: "#c5c6c7",
    headerTextColor: "#1f2833",
    descriptiveTextColor: "#1f2833",
  },
};
export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      {/* <Home /> */}
      {/* <PublisherList /> */}
      <GameList />
    </ThemeProvider>
  );
}
