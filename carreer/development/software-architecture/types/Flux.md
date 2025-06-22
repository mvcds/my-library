An [[Software Architecture|Architectural]] approach for having predictable [[State]] in frontend applications

---

An unidirectional [[Event Sourcing]] with 4 components:

- Dispatcher: holds references to stores, and send them the appropriate actions[^1]
- Store: holds the total data, also cares about applying [[Reducer|Reducers]] to its input
- View: UI-related part - which cannot modify the Store directly, it needs to dispatch actions
- Action: an [[carreer/development/programming/message/Event|event]] that has a `type` and extra [[Data]]

[^1]: [[Publisher-Subscriber Pattern|Pub/Sub]]
