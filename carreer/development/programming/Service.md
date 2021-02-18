(The content below is under the light of a "[[microservice]]" perspective)

# What a service is not

- Something with only functionality is a [[function]]
- Something with only [[data]] is an [[entity]]

# What is a service

- The technical authority for a specific [[business]] capability.
- It is similar to [[Domain-Driven Design]] "[[Bounded Contexts]]", as it has data plus business rules.
- Everything must be within 1 and only in 1 service.
- Services are logical whereas systems are physical.
- It is best suited for stable business rules.
- They can be found through "anti-requirements pattern"(?)
- Naming a service too early and you might condemn yourself to be biased towards that name.