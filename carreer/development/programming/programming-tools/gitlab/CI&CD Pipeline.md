The [[File .gitlab-ci.yml]] is the one that defines the [[Gitlab]]'s [[DevOps Pipeline|Pipeline]]

A [[JOB]] is WHAT TO DO, it is possible to extend a jog from another one in another file
A [[STAGE]] is WHEN TO DO IT

A [[RUNNER]] IS AN AGENT WHICH EXECUTES MULTIPLE JOBS OF THE SAME STAGE IN PARALLEL

THE PIPELINE ONLY MOVES THE NEXT STAGE IF ALL JOBS [[success|SUCCEED]] (Normally)

---

It's possible to setup dependencies between jobs in two ways

- dependencies: bound to the stage
- needs: allow bypassing stages, allowing to create [[Directed Acyclic Graph]]
