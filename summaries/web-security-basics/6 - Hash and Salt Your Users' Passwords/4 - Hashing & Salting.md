In case [[3 - Only store passwords if you don't have an option, like for regulatory reasons|you don't have an option but to store a password]], store its [[Hashing|Hash]] instead, as hashes are practically impossible to revert.

The problem is that if an [[Attacker]] has access to many look up tables containing and the hash for one of them, they can reverse engineer all other look up tables from hashes to password.

That's why we [[Salting|Salt]] our hashes with dynamic values.

---

Hashing and salting is a good start but even this might not be enough because [[5 - In addition to choosing an appropriate algorithm, you want to make sure you have it configured correctly]]

#understanding of [[0 - Web Security Basics]]