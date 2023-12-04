---
url: https://github.com/Praqma/git-merge-driver
---
A mechanism in [[git]] to perform custom [[Git Merge|merges]].

The [[Git Configuration]] has to be customised to allow driver on the project

```git
[merge "driver-name"]
	name = Loper
	driver = custom-driver.sh %O %A %B
```

The `driver` property contains the command that will be called when a conflict occurs. There's a handful of predefined parameters, most notably:

- `%O`: ancestor’s version of the conflicting file
- `%A`: current version of the conflicting file
- `%B`: other branch's version of the conflicting file

Note: Any tools or scripts called by the merge driver must be available on `PATH`.

Then the [[Git Attributes]] need to know which files relate to that driver

`*.file merge=driver-name`