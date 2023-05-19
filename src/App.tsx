import "./App.css";
import GenericEnumBasedSelect from "./components/generic-enum-based-select";
import { Color } from "./types/e-color";

function App() {
  return (
    <>
      <GenericEnumBasedSelect
        _enum={Color}
        changeHandler={(newOption: string) => console.log(newOption)}
        initialOption={"green"}
      />
    </>
  );
}

export default App;
