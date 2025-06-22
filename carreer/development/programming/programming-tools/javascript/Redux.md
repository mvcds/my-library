A [[State Manager]] which is a implementation of [[Flux]]

# Concepts

- Actions: a [[Transfer Object]] which contains how the [[state]] will change, it only requires a `type` member to be used by the [[Reducer]]
- Action Creator: a [[Function]] that creates an [[action]]
- [[Reducer]]: the place where the [[State]] is actually changed
- Store: where the [[Information]] lays. We can read and [[Publisher-Subscriber Pattern|subscribe]] to it. A store can be [[composition|composed]] by sub-stores

# Alternatives

- [[MobX]]
- [[React-Query]]
- [[React Hooks]]
- [[Vuex]]
