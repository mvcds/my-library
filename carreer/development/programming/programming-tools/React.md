A reactive UI library developed by [[Facebook]]

It's based on creating [[Component]]s which can be used within another components to show information.

Information goes from upper components to its children, but do not go back (part of this information can be [[Callback]]s which would change the parent's information, causing the children components to react accordingly)

Each component might also have its own set of information.