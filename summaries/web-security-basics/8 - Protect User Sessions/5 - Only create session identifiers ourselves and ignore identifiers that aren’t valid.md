> Only create [[carreer/development/programming/security/Session|session]] identifiers ourselves and ignore identifiers that aren’t valid

Never do:

```ts
if (!isValid(sessionId)) {
  session = createSession(sessionId)
}
```

#quote on [[0 - Web Security Basics]]
