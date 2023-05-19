import { FC } from "react";
import { getEnumKeyValues } from "../lib/utils";

interface IProps {
  _enum: object;
  changeHandler: (newOption: string) => void;
  initialOption:string
}

const GenericEnumBasedSelect: FC<IProps> = ({ _enum, changeHandler ,initialOption}) => {
  const array = getEnumKeyValues(_enum);
  const optionElems = array.map((it, i) => (
    <option key={i} value={it.key}>
      {it.value}
    </option>
  ));
  const selectElem = (
    <select defaultValue={initialOption} onChange={(evt) => changeHandler(evt.target.value)}>
      {optionElems}
    </select>
  );

  return (
    <div>
      <h2>GenericEnumBasedSelect</h2>
      {selectElem}
    </div>
  );
};

export default GenericEnumBasedSelect;
