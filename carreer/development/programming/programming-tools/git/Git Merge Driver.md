---
url: https://github.com/Praqma/git-merge-driver
aliases:
  - custom merge driver
  - custom merger drivers
  - merge driver
  - merge drivers
  - git merge drivers
---
[[git]] allows us to using specific tools for solving merge conflicts, those are called merge drivers, and we can define them in a [[Git Configuration|.gitconfig]] file

```
[merge "my-custom-driver"]
	name = A custom merge driver used to resolve conflicts in certain files
	driver = my-merge-tool.sh %O %A %B
```

Where

- `%O`: ancestor’s version of the conflicting file
- `%A`: current version of the conflicting file
- `%B`: other branch's version of the conflicting file

For a successful merge, the merge driver is expected to leave the merge result at `%A`'s path and exiting with status code `0`.

Then we need to configure the [[Git Attributes|.gitattributes]] to the merge driver

```
*.mrg merge=my-custom-driver
```
