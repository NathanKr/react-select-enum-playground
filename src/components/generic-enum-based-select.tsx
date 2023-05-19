import { FC } from "react";
import { getEnumKeyValues } from "../lib/utils";

interface IProps {
  _enum: object;
  changeHandler: (newOption: string) => void;
  initialOption: string;
}

const GenericEnumBasedSelect: FC<IProps> = ({
  _enum,
  changeHandler,
  initialOption,
}) => {
  const array = getEnumKeyValues(_enum);
  const optionElems = array.map((it, i) => (
    <option key={i} value={it.key}>
      {it.value}
    </option>
  ));
  const selectElem = (
    <select
      defaultValue={initialOption}
      onChange={(evt) => changeHandler(evt.target.value)}
    >
      {optionElems}
    </select>
  );

  if (!Object.keys(_enum).includes(initialOption)) {
    console.error(
      `Wrong initial option : ${initialOption} . use only enum key`
    );
  }

  return <div>{selectElem}</div>;
};

export default GenericEnumBasedSelect;
