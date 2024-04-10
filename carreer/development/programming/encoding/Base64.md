![[base-64-with-3-significant-input.png]]

A group of binary-to-text [[encoding]] schemes that represent binary [[data]] (more specifically a sequence of 8-bit bytes) in an [[ASCII]] string format by translating it into a radix-64 representation.

The [[term]] Base64 originates from a specific [[MIME]] content transfer encoding. Each non-final Base64 digit represents exactly 6 bits of data[^1]. Three 8-bit [[byte]]s (i.e., a total of 24 bits) can therefore be represented by four 6-bit Base64 digits.

Common to all binary-to-text encoding schemes, Base64 is designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is particularly prevalent on the [[World Wide Web|Web]] where its uses include the ability to embed image files or other binary assets inside textual assets such as [[HyperText Markup Language|HTML]] and [[Cascading Style Sheet|CSS]] files

Padding characters (`=`) might be added to make the last encoded block contain four Base64 characters.

![[base-64-with-2-significant-input.png]]

As it's possible to see, there might be up to 3 significant inputs

![[base-64-with-1-significant-input.png]]

[^1]: Groups of 6 bits (6 bits have a maximum of $26^2 = 64$ different binary [[my-library/carreer/development/Value|values]])
