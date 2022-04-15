import { render } from "preact";
import Newtab from "@pages/Newtab/Newtab";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(<Newtab />, appContainer);
}

init();
