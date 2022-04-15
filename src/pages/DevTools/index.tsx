import { render } from "preact";
import DevTools from "@src/pages/DevTools/DevTools";

function init() {
  try {
    chrome.devtools.panels.create(
      "My new Dev Tools panel",
      "icon-34.png",
      "devtools.html"
    );
  } catch (e) {
    console.error(e);
  }
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(<DevTools />, appContainer);
}

init();
