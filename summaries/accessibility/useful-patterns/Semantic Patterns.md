- [[Accessible Rich Internet Applications|ARIA]] is only used when we need to, so it takes precedence i.e. in case of labels vs `aria-labeledby`
- Use the correct headings
- Label forms and grouping tags properly
  - Radio buttons need grouping
- Divs can be without text, if its styes has no [[Semantics]] meaning, but some elements that do have it, like H2, cannot, unless they get an aria label on the wrapping semantic element - often a div, span or p
- TH element have a scope attribute
- Even tho protected(?) elements work on the browse, for [[Accessibility|A11y]] they are ignored
