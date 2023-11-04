**🚧 WIP: these docs are a work in progress and need revision**

# Practices

## Spreading props

When building basic, single element components such as a button, spreading props is fairly straightforward and styled-components takes care of it.

```tsx
const CTA = styled.button<ThemeComponent>(() => useComponentStyle("cta"));
```

However, when building components that are made up of multiple elements, it can be less obvious where props will spread to. To provide flexibility when extending styles and variants it's recommended to use `useComponentStyle` on the uppermost element where possible - as well as the style and class props. Remaining props can be spread to the most _logical_ element and documented accordingly.

```tsx
const Field = styled.div<ThemeComponent>(() => useComponentStyle("field"));

type Props = JSX.IntrinsicElements["input"] & { label: string };
const TextField = ({ label, className, style, ...rest }: Props) => {
  return (
    <Field className={className} style={style}>
      <label>{label}</label>
      <input type="text" {...rest} />
    </Field>
  );
};
```

This allows variants and overrides that target all elements in the component, and make sure layout styles such as margin are applied to relevant outer element.

```tsx
const StyledField = styled(Field)`
  color: goldenrod;
  margin-top: 10px;

  input {
    border: 1px solid tomato;
  }
`;
```
