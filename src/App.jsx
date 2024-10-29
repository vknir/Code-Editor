import { RecoilRoot} from "recoil";

import Editor from "./components/Editor";
import Header from "./components/Header.jsx";
import IFrame from "./components/IFrame.jsx";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <main>
        <Header />

        <div className="upper-section">
          <Editor language={0} />
          <Editor language={1} />
          <Editor language={2} />
        </div>
        <div className="lower-section">
          <IFrame />
        </div>
      </main>
    </RecoilRoot>
  );
}

export default App;
