https://snook.ca/archives/html_and_css/font-size-with-rem

It stands for "root em", so a [[Cascading Style Sheet|CSS]] rule using it has its size related to the root tag, `html` .

Making possible for us to define a single font size for the whole document, and get values as percentage of the root

```css
html { font-size: 62.5%; } 
body { font-size: 14px; font-size: 1.4rem; } /* =14px */
```