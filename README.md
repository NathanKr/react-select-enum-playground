<h2>Motivation<h2>
Expreriment with enum based select which may be very common

<h2>Design<h2>
The result is a generic component GenericEnumBasedSelect whith enum key as option value and enum value as option text


<h2>Usage<h2>

```jsx

<GenericEnumBasedSelect
    _enum={Color}
    changeHandler={(newOption: string) => console.log(newOption)}
    initialOption={"green"}
/>

```

```ts

export enum Color{
    red="Red",
    green="Green",
    blue="Blue"
}

```
