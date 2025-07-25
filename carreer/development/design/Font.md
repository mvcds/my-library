A collection of _[[Glyph]]_ definitions, ie. definitions of the shapes used to display [[Character]]s.

Once your[[Software]] has worked out what characters it is dealing with, it will then look in the font for glyphs it can use to display or print those characters. (Of course, if the [[Encoding]] [[Information]] was wrong, it will be looking up glyphs for the wrong characters.)

A given font will usually cover a single [[Character Set]], or in the case of a large character set like [[Unicode]], just a subset of all the characters in the set. If your font doesn't have a glyph for a particular character, some browser or [[Software]] applications will look for the missing glyphs in other fonts on your [[system]] (which will mean that the glyph will look different from the surrounding text, like a ransom note). Otherwise you will typically see a square box, a question mark or some other character instead. For example:
