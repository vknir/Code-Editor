import { useRecoilValue } from "recoil";

import html from "../store/htmlState";
import css from "../store/cssState";
import js from "../store/jsState";
import { useEffect } from "react";

function IFrame() {
  const htmlState = useRecoilValue(html);
  const cssState = useRecoilValue(css);
  const jsState = useRecoilValue(js);

  const srcDocument = `<body> <style>${cssState.value}</style> ${htmlState.value} <script>${jsState.value}</script> </body>`;

  return <iframe srcDoc={srcDocument}></iframe>;
}

export default IFrame;
