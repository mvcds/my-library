---
aliases: [MVC]
---

![[model-view-controller.png]]

A famous architecture where there are three main kinds of components which can be worked in parallel by different [[team]] members

- [[Model]]: manages the application's [[Data]]
- View: presents user with the relevant model
- Controller: receives user input and transfer it to the model in a way that the model understands

The controllers tend to get bloated with data access, cache, validation, etc, to avoid this we can employ different strategies like layering[^1] the controllers with those kind of concerns (like the image above), and moving business logic to the model

(I wonder if the models/controlllers can also be made specific according to the view needs)

[^1]: [[carreer/development/software-architecture/types/Layered Architecture|Layered Architecture]]

---

Different people have distinct understandings of what MVC means
