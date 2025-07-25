#concept about [[Information Security|Security]] in [[Technical Concepts for system design interviews]]

- [[Authentication]] is figuring out who you're talking to
- [[Authorization]] is allowing/refusing access to some [[Asset]]
- Not storing [[password]] as plain text, perform [[4 - Hashing & Salting]]
  - [[Hashing]]: making it unreadable
  - [[Salting]]: making it less predictable (tho salts are not a secret themselves)
  - [[Rainbow Table]]: look up table for common passwords and their unsalted hashes
- Care with [[Sign In Handlers|Login Handlers]] and [[Logging]]
  - ![[Logging#Avoid logging]]
  - [[Do not auto-log post bodies and get parameters]], instead verify if it's relevant and appropriate
- [[Security Token|Session Token]]: avoids passing [[Password|passwords]] around all the time like [[JSON Web Token|JWT]] and [[Cookie|Cookies]]
  - ![[JSON Web Token#Types|JWT]]
  - ![[Cookie#Configuration]]
