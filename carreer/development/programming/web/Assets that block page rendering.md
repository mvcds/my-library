- Images?: no
- Fonts?: no
- Stylesheets?: **yes**

It's possible to encode assets into [[Cascading Style Sheet|CSS]] to load them at the same [[time]] as the stylesheet. eg. images and font on CSS.

Compressing CSS with images is less efficient, and over the network, embedding an image into a file text will delay the file text to arrive, if the file text is critical to page rendering (as is CSS), the page will be blocked until the request finishes.

[[Cache|Caching]] is also a problem, because, changing details in the CSS will force users to redownload all resources which were embedded into that file, as fonts, that are rarely changed on a project.
