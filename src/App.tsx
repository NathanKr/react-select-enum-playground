import { useState } from "react";
import "./App.css";
import GenericEnumBasedSelect from "./components/generic-enum-based-select";
import { Color } from "./types/e-color";

function App() {
  const [color, setColor] = useState(Color.green); // -- set the value e.g. "Blue"

  return (
    <>
      <h2>GenericEnumBasedSelect</h2>
      <p>color state : {color}</p>
      <GenericEnumBasedSelect
        _enum={Color}
        changeHandler={(newOption: string) => setColor(newOption as Color)}
        defaultValue={color}
      />
    </>
  );
}

export default App;
