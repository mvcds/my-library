A way to encapsulate [[CSS]] styles. by using hidden [[DOM]] trees to be attached to elements in the regular DOM tree (the Shadow DOM can be attached/removed/edited just like a regular DOM tree)

There are some bits of shadow DOM terminology to be aware of:

- Shadow host: The regular DOM node that the shadow DOM is attached to.
- Shadow tree: The DOM tree inside the shadow DOM.
- Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
- Shadow root: The root node of the shadow tree.

# Usage

`let shadow = elementRef.attachShadow({ mode: 'open' | 'closed' });`

If you attach a shadow root to a custom element with mode "closed", you won't be able to access the shadow DOM from the outside. Consulting it returns null.

This is the case with built in elements that contain shadow DOMs, such as <video> (which has internal controls which are hidden).

