https://martinfowler.com/bliki/CQRS.html
https://jaysoo.ca/2015/02/06/what-the-flux/
http://codebetter.com/gregyoung/2010/02/16/cqrs-task-based-uis-event-sourcing-agh/

AKA CQRS

At its heart is the notion that you can use a different [[Model]] to update [[Information]] than the [[Model]] you use to read [[Information]].

Normally those [[Model]]s are entangled into a single [[Model]] at the beginning and we split them apart.

The separation occurs based upon whether the methods are a [[Command#Mutation|command]] or a [[Query]].

This separation however enables us to do many interesting things architecturally, by allowing us to see that they do not need to use the same data [[Model]] just because they share the same [[Data]].

CQRS does not require a task based UI. We could apply CQRS to a CRUD based interface.

---

> CQRS is about breaking up [[Model]]s which share [[Data]]

#quote