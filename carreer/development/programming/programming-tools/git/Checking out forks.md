You have to add the other [[Change remote|origin]] and them fetch it `git fetch  -a <remote>`

You can check if you have access to the other origins with `git branch -r`

If the origins share [[Git Branch|branch]] names, you cannot checkout directly, you have to create a new branch pulling from the alternative origin `git branch -b <new-local-branch-name> <remote-reference>`