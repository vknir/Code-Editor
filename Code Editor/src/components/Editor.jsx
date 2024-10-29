import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

import "./editor.css";
import html from "../store/htmlState";
import css from "../store/cssState";
import js from "../store/jsState";

function Editor({ language }) {
  const htmlState = useRecoilValue(html);
  const setHtmlState = useSetRecoilState(html);

  const cssState = useRecoilValue(css);
  const setCSSState = useSetRecoilState(css);

  const jsState = useRecoilValue(js);
  const setJSState = useSetRecoilState(js);

  let editorConfig;

  switch (language) {
    case 0:
      editorConfig = htmlState;
      break;

    case 1:
      editorConfig = cssState;
      break;

    case 2:
      editorConfig = jsState;
      break;
  }

  function handleChange(value) {
    switch (language) {
      case 0:
        setHtmlState((prev) => {
          return { ...prev, value };
        });
        break;
      case 1:
        setCSSState((prev) => {
          return { ...prev, value };
        });
        break;
      case 2:
        setJSState((prev) => {
          return { ...prev, value };
        });
        break;
      default:
        break;
    }
  }

  function invertExpand(expanded) {
    switch (language) {
      case 0:
        setHtmlState((prev) => {
          return { ...prev, expanded: !expanded };
        });
        break;
      case 1:
        setCSSState((prev) => {
          return { ...prev, expanded: !expanded };
        });
        break;
      case 2:
        setJSState((prev) => {
          return { ...prev, expanded: !expanded };
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className={editorConfig.expanded ? "editor" : " editor minimized"}>
      <div className="editor__heading">
        <div className="heading-icon">
          {language == 0 ? (
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
            </svg>
          ) : language == 1 ? (
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
            </svg>
          ) : (
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M6.5 6V11C6.5 11.8284 5.82843 12.5 5 12.5C4.17157 12.5 3.5 11.8284 3.5 11M0.5 0.5H14.5V14.5H0.5V0.5Z"
                stroke="#ffffff"
              />
            </svg>
          )}
        </div>
        <p>{editorConfig.options.mode.toUpperCase()}</p>

        <FontAwesomeIcon
          onClick={() => invertExpand(editorConfig.expanded)}
          icon={editorConfig.expanded ? faExpandAlt : faCompressAlt}
        />
      </div>

      <CodeMirror
        value={editorConfig.value}
        options={editorConfig.options}
        onBeforeChange={(editor, data, value) => {
          handleChange(value);
        }}
      />
    </div>
  );
}

export default Editor;
