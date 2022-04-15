import Popup from "@pages/Popup/Popup";
import { render } from "preact";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(<Popup />, appContainer);
}

init();
