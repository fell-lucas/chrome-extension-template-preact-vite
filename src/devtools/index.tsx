import Devtools from "@src/devtools/Devtools";
import { initElement } from "@src/main";

const bootstrap = () => {
  try {
    chrome.devtools.panels.create(
      "My new Dev Tools panel",
      "icon-34.png",
      "devtools.html"
    );
  } catch (e) {
    console.error(e);
  }
  initElement(<Devtools />);
};

bootstrap();
