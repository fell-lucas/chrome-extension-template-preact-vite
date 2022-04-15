import { render } from "preact";
import Options from "@pages/Options/Options";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(<Options />, appContainer);
}

init();
