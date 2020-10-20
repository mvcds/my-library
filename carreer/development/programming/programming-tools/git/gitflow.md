https://nvie.com/posts/a-successful-git-branching-model/

A [[Branching Strategy]] for [[git]] where the work is initiated on `develop` and merged back to `main`.

* `feature`: new features regardless of when they are intended to go back to development (tho, the sooner the better). It comes from `develop` and go back into it.
* `release` : support product release - and minor fixes that might enter before integrating this. It comes from `develop` and gets merged back into `develop` and `master`
* `hotfix`: like an unplanned `release`, so instead of coming from `develop`, it comes from `master` instead.

#complement  with image

Beware that **Long-lived branches** should be avoided

---

In 2020 the author recognizes that this model might be outdated (or misused).

> If, however, you are building software that is explicitly versioned, or if you need to support multiple versions of your software in the wild, then git-flow may still be as good of a fit to your team

#quote