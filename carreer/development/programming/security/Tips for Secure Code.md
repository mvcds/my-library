#procedure #concept 

How to increase [[Code]] [[Security]]

- Run [[Threat Model]]
- Don't [[trust]] [[user]] [[Input]]
- Assumptions should be explicit on the codebase
	- Make sure it won't work if misuses
- [[Authentication|Authenticate]] & [[Authorization|Authorize]]
- Static analysis tools
- Log carefully (no [[Private Personal Information|PPI]], [[Password|Passwords/Secret-Keys]], sensitivity [[Header|Headers]])
- [[Cryptography]] needs to avoid unnecessary [[Complex|Complexity]]
- Simple and small [[carreer/development/design/Design|Design]]
- Use secure defaults ([[Positive Validation|prefer to lock out than allow in]])
- [[Least Privilege Principle]] AKA need to know: just give users what they need for the role
- Secure [[Sofware Development Life Cycle|SDLC]] (SSDLC)
- Review earlier
- [[Datensparsamkeit|Don't store what you don't need]]
- [[Content-Security-Policy]]
- Insecure design & Security [[Configuration|Misconfiguration]]: most cause of [[Vulnerabil]]
- Server-Side Request Forgery