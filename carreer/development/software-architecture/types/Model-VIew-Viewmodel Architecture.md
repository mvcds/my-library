---
aliases: [MVVM]
---

![[model-view-viewmodel.png]]

It works better when there's advanced data binding support.

The [[Model]] and the view are intermediated by a viewmodel

The user interacts with the view, which thanks to the data binding affects the view model, which uses information or methods on the model

This architecture is good for desktop and mobiles (but why???) and offers a great separation of concerns and thus testability, on the other hand it might be harder to debug it

---

This is an overkill for simple applications