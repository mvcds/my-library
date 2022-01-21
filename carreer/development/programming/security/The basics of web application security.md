https://martinfowler.com/articles/web-security-basics.html

Modern [[World Wide Web|Web]] [[Software|development]] has many challenges, and of those [[Information Security|Security]] is both very important and often under-emphasized. While such techniques as [[threat analysis]] are increasingly recognized as essential to any serious development, there are also some basic practices which every developer can and should be doing as a matter of course.

Security and [[Performance]] have a lot in common:
	- Both are requirements
	- Both are neglected by stakeholder

The difference between them is that fact that performance is easily mensurable. Often when a non-technical stakeholders, they don't know how to spot if something is secure or not. 

# [[Trust]]

The [[Integrity]] of requests coming from [[Browser|Browsers]] cannot be trusted, nor the [[Data]] coming from upstream [[Server|Services]] (we don't know if its safe and clean, and if it was done, we don't know if it was done properly), nor the connection between our [[Server]] and a [[Client]], nor services and/or [[Computer data storage]].

Trust is an spectrum, and we need to asses our risks tolerance, the criticality of the data and the investments (time and money) we do to keep it safe

# Reject Unexpected Form Input

It doesn't matter is the user is using a [[HTTPS]] connection, we still cannot trust their data because they might send it malformed or tampered. **All validation needs to be done in the server**.

Using [[Positive Validation]] is a good practice, but pay attention to not return data (variable names) that the client doesn't need to know. Use [[Negative Validation]] when you can do the positive one.

# [[Encoding|Encode]] [[HyperText Markup Language|HTML]] Output

- The appropriate [[Codec]] should be used for each case.
- Avoid nested rendering contexts as much as possible
- Store the data in raw form and encode it at rendering time

# Bind [[Parameter|Parameters]] for [[Database]] [[Query|Queries]]

Parameter binding provides a means of separating executable code, such as [[Structured Query Language|SQL]], from content, transparently handling content encoding and escaping.

Any full-featured data access layer will have the ability to bind variables and defer implementation to the underlying protocol. This way, the developer doesn't need to understand the complexities that arise from mixing user input with executable code. For this to be effective all untrusted inputs need to be bound. If SQL is built through concatenation, interpolation, or formatting methods, none of the resulting string should be created from user input.

# Protect Data in Transit

- Just use secure protocols like [[Transport Layer Security|TSL]] and enforce it with [[HTTP Strict Transport Security|HSTS]]
- Do not use sensitive data inside of a URL
- Protect [[Private Key]]s
- Set "secure" flag in [[Cookie|Cookies]]

# Hash and Salt your [[user]]'s password

- Never store a password, instead store its [[hash]] from a known and secure hash [[Algorithm]]
- [[Salt]] before hashing
-  Ideally, make your password storage mechanism configurable so it can evolve
-  Avoid storing passwords for external systems and services
-  Be careful not to set password size limits that are too small, or character set limits that are too narrow

# [[Authentication|Authenticate]] users safely

- Consider other options rather than user/password like [[Single Sign On|SSO]]
- Re-authenticate for important actions
- Conceal Whether Users Exist: instead of saying _The user id is unknown_ consider _Incorrect user ID or password_
- Prevent brute force attacks: use techniques like [[Short Lockout|Short Lockouts]] and [[CAPTCHA]]
- Don't use default or hard-coded credentials
