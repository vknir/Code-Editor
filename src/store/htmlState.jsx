import { atom } from "recoil";

const html = atom({
  key: "htmlState",
  default: {
    value: "<!--Write your HTML here -->\n",
    options: {
      mode: "xml",
      theme: "material",
      lineNumbers: true,
    },
    expanded: true,
  },
});

export default html;
