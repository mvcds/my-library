An [[Node Package Manager|NPM]] package to run commands sequentially

```bash
run-s clean lint build
```

https://github.com/mysticatea/npm-run-all/blob/master/docs/run-s.md

Example:

```json
"test:unit": "...",
"test:integration": "...",
"test": "run-s test:**",
```
