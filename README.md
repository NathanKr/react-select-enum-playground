<h2>Motivation<h2>
Expreriment with enum based select which may be very common

<h2>Design<h2>
The result is a generic component GenericEnumBasedSelect whith enum key e.g. 'green' as option value and enum value e.g. 'Green' as option text


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

<h2>Developer Experience<h2>
There is realy very little room for going wrong with the GenericEnumBasedSelect API. However , you might be wrong with initialOption because it is not type safe. Currently i did not put effort to be type safe on GenericEnumBasedSelect because being generic it may be not possible. Anyway, to give some protection,an error is issue to the console if you got initialOption wrong