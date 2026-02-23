---
source: https://nichesoftware.co.nz/2018/05/12/fix-it-twice.html
aliases:
  - Phased Fix
---
#procedure #concept 

When a [[designing-data-intensive-applications/concepts/three-types-of-faults/Failure|Failure]] happens, use a phased fix

1. Fix the immediate problem in the target [[Environment]] (usually production)
2. Once the fire is out, change the [[carreer/development/programming/Process#Noun|Process]] so that the failure doesn't happen again

The second step might be actually N steps