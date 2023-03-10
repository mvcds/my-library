Similarly to [[1 - Encode HTML Output]], handling [[Data]] can be create unwanted outputs, which on the [[Database|Databases]] can result in [[SQL Injection]].

This is hard to do right, so keep using [[SQL Parameter Binding]] as to keep devs ignorant about the [[Complex|Complexities]] that arise from mixing user [[input]] with executable [[code]][^1].

#understanding of [[0 - Web Security Basics]]

[^1]: A way to do it is described in [[3 - For parameter binding to be effective all untrusted inputs need to be bound]]