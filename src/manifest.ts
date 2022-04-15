import packageJson from "../package.json";
import { ManifestType } from "@src/manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "options.html",
  background: { service_worker: "background.js" },
  action: {
    default_popup: "popup.html",
    default_icon: "icon-34.png",
  },
  chrome_url_overrides: {
    newtab: "newtab.html",
  },
  icons: {
    "128": "icon-128.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["content.js"],
    },
  ],
  devtools_page: "devtools.html",
  web_accessible_resources: [
    {
      resources: ["icon-128.png", "icon-34.png"],
      matches: [],
    },
  ],
};

export default manifest;
