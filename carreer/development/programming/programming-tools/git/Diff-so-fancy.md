A tool that changes how [[Git]] shows file differences

```shell
npm install -g diff-so-fancy
git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX"
```