https://martinfowler.com/articles/micro-frontends.html

An architectural style where independently deliverable fronted applications are [[composition|composed]] into a greater whole which is transparent for the user i.e. for them, it seems a monolitic frontend.

# Benefits

- smaller, more cohesive and maintainable [[Code|Codebase]]s
- more scalable organisations with decoupled, [[Autonomy|autonomous]] [[team|teams]]
- the ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion than was previously possible

# Drawbacks

[[In software, everything is possible but nothing is free]]

Some microfrontend implementations can lead to duplication of dependencies, increasing the number of bytes our users must download. In addition, the dramatic increase in team autonomy can cause fragmentation in the way your teams work.

# Technical Concerns

#learn

- Host the microfrontends
- Avoid styling conflicts
- To communicate is better to use custom events, prop drilling, to share a storage (redux or [[Browser]]'s) or the address bar?
- Share cross-cutting concerns e.g. authentication being equal for every part
- Handle dependency redundancy
- Handle dependency conflicts
- What is owned by each team: components, pages, a mix?
- Who onws the container site?
- How to handle common parts like footer, header, etc?
- How to know when and where to render each part?
- Manage each part as a dependency?
- [[Runtime]] or build time? (Build time seems to reintroduce the problems)
- Iframes, scripts to load different bundles (JS) or [[Web Component]]s? (Iframes are the less flexible choice)
- Functional or contractual testing[ˆ1]? (Functional seems too brittle)
- How to keep the size of the app low?

# Operational/Governance Concerns

- Do you have enough automation in place to feasibly provision and manage the additional required infrastructure?
- Will your frontend development, testing, and release processes scale to many applications?
- Are you comfortable with decisions around tooling and development practices becoming more decentralised and less controllable?
- How will you ensure a minimum level of quality, consistency, or governance across your many independent frontend [[Code|Codebase]]?

# Drops

(not necessarily true)

- Communication should be kept to a minimum
- When features on micro frontend often also requires backend changes, that's a strong case for a [[Backend for frontends]], owned by the same team.
- use unit tests to cover your low-level [[Business]] logic and rendering logic, and then use functional tests just to validate that the page is assembled correctly. For example, you might load up the fully-integrated application at a particular [[Uniform Resource Locator|URL]], and assert that the hard-coded title of the relevant micro frontend is present on the page.
- If there are user journeys that span across micro frontends, then you could use functional testing to cover those, but keep the functional tests focussed on validating the integration of the frontends, and not the internal [[Business]] logic of each micro frontend, which should have already been covered by unit tests.

#complement webpack federation(?)\

[^1]: Check [[Consumer-Driven Contracts]]
