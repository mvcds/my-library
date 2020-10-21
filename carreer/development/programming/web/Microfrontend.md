An architectural style where independently deliverable fronted applications are [[composition|composed]] into a greater whole which is transparent for the user i.e. for them, it seems a monolitic frontend.

# Benefits

* smaller, more cohesive and maintainable codebases
* more scalable organisations with decoupled, autonomous teams
* the ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion than was previously possible

# Drawbacks

[[In software, everything is possible but nothing is free]] 

Some microfrontend implementations can lead to duplication of dependencies, increasing the number of bytes our users must download. In addition, the dramatic increase in team autonomy can cause fragmentation in the way your teams work.

# How to

#learn 

* Host the microfrontends
* Avoid styling conflicts
* Communicate between parts
* Share cross-services data e.g. authentication being equal for every part
* Handle dependency redundancy
* Handle dependency conflicts 
* What is owned by each team: components, pages, a mix?
* Who onws the container site?

#complement webpack federation(?)