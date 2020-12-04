An [[Object]] used to manage [[Concurrency]] in an "atomic" way so multiple requests to the [[Database]] can be avoided.

It keeps keeps a list of all the effects you want to apply (everything affected by [[business]] transactions) and applies them at once, saving you from keeping the request open or making multiple of them.

https://martinfowler.com/eaaCatalog/unitOfWork.html