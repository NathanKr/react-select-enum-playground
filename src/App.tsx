import { useState } from "react";
import "./App.css";
import GenericEnumBasedSelect from "./components/generic-enum-based-select";
import { Color } from "./types/e-color";
import { Country } from "./types/e-country";

function App() {
  const [color, setColor] = useState<Color>(Color.green); // -- set the value e.g. "Blue"
  const [country, setCountry] = useState<Country>(Country.england);

  return (
    <>
      <h2>GenericEnumBasedSelect</h2>
      <p>color state : {color}</p>
      <GenericEnumBasedSelect
        _enum={Color}
        changeHandler={(newOption: string) => setColor(newOption as Color)}
        defaultValue={color}
      />
      <p>country state : {country}</p>
      <GenericEnumBasedSelect
        _enum={Country}
        changeHandler={(newOption: string) => setCountry(newOption as Country)}
        defaultValue={country}
      />
    </>
  );
}

export default App;
