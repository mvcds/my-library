A [[State Manager]] which is a implementation of [[Flux]]

# Concepts

- Actions: a [[Transfer Object]] which contains how the [[state]] will change, it only requires a `type` member to be used by the [[reducer]] 
- Action Creator: a [[Function]] that creates an [[action]]
- Reducer: the place where the state is actually changes
- Store: where the information lays. We can read and [[PubSub|subscribe]] to it. A store can be [[composition|composed]] by sub-stores

# Alternatives
-  [[MobX]]
-  [[React-Query]] 
-  [[React Hooks]]