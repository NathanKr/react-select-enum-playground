import { IEnumKeyValue } from "../types/i-enum-key-value";



export function getEnumKeyValues(_enum: Object): IEnumKeyValue[] {
  const enumKeyValues: IEnumKeyValue[] = [];

  for (const [key, value] of Object.entries(_enum)) {
    const item: IEnumKeyValue = { key, value };
    enumKeyValues.push(item);
  }

  return enumKeyValues;
}
