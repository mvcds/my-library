[[Git]]

```shell
git branch --merged | grep -v "\*" | grep -v master | xargs -n 1 git branch -d
```
