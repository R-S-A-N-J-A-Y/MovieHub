import { useState } from "react";
import Alerts from "./components/Alerts";
import Buttons from "./components/buttons";

function App() {

  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && <Alerts onClose={() => setVisible(false)}>My alert</Alerts>}
      <Buttons color = "danger" onClick={() => setVisible(true) }>My Button</Buttons>
    </div>
  );
}

export default App;
