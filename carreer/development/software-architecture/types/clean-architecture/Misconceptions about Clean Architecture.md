---
url: https://habr.com/ru/company/mobileup/blog/335382
---

Highlights of this article about misconceptions about [[Clean Architecture]]

# [[Tier vs Layer|Layers]]

- [[Entity|Entities]] encapsulate the logic of the [[business]][^1], that is, everything that does not depend on a specific [[Software|Application]], but will be common to many. But if you have a separate app that is not tailored for any business, then they will be business objects containing the most general and high-level rules
- [[Use Case|Use Cases]] ([[Interactors]]): application logi
- [[Interface]] Adapters: link the use cases to the outside world. This include [[Model-View-Presenter Architecture|MVP Presenters]], as well as Gateways AKA Repositories.
- [[Architectural Framework|Frameworks]]: the outmost layer, here lies the rest: [[User Interface|UI]], [[Database]], [[Hypertext Transfer Protocol|HTTP]] client, etc

# [[Dependency Rule]]

In summary: inner layers should not depend on outer ones. The name of entities declared outside should not leak to a inner layer.

- Transitions: transferring [[Data]] between layers are done through boundaries i.e. [[Interface|Interfaces]]: one for request, and another for response
- Interfaces: declared on the inner layer
- Use cases: they are a detail, a description of the action that a [[User]] can perform
- Presenter: a UC **invokes** methods on the presenter because the presenter implements the "output" port
- Data that cross borders: should be [[Transfer Object|simple structures]] defined to optimize the inner layer e.g. when using [[Function]] to invoke a UC, the data should already be in the format it needs to be i.e. **mapping occurs in the adapter**
- Parsing external data might be done on the interactor or in the repository. But doing on the interactor will [[compromise]] the idea of data crossing the boundaries being as convinient as possible for the inner layer.
- [[Flow of data]] is clearly defines

# Misc

- Interactor: another name for UC. Some people say that interactors are a collection of UCs but that might lead to confusion
- Repository: mediates between the domain and data mapping layer using a collection-like interface for accessing [[Domain Object|Domain Objects]]
- Gateway: another name for Repository. Essentially a kind of [[Façade Pattern|Façade]] where we hide a complex [[Application Programming Interface|API]] behind simple methods

[^1]: [[Policy and Details]]
