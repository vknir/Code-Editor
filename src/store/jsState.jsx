import { atom } from "recoil";

const js = atom({
  key: "jsState",
  default: {
    value: "//Write your JavaScript here \n",
    options: {
      mode: "javascript",
      theme: "material",
      lineNumbers: true,
    },
    expanded: true,
  },
});

export default js;
