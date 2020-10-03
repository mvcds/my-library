To get a "[[Git Commit|commit]]" that can be applied in another computer

1) `git format-patch COMPARATIVE_BRANCH --stdout > patch`
2) `git apply --stat patch`

or 

1) `git format-patch SHA~..SHA`
2) `git apply patch`
 
*`git apply patch --reject` will apply as much as possible, passing errors to .reject files