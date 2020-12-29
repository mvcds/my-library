AKA MVP

![[model-view-presenter.png]]

A variation (or evolution?) of [[Model-View-Controller Architecture|MVC]] where the user interacts with the view which ten passes the input to the presenter, which manipulates the [[Model]]

We have two flavors of this architecture

- Passive View: when the UI logic is at the presenter, and the view has no idea about the model
- Supervising Controller: when the UI contains the details on how to render the model, reserving the presenter for more complex logic (an bidirectional arrow can be drawn from the view box to the model box)

This pattern is a great fit for desktop applications (but why?) and achieves great testability due to the presenter