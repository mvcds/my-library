[[1 - The cargo shipment system]] will use a [[domain-driven-design/concepts/layered-architecture/Layered Architecture|Layered Architecture]] as a way to create 3 [[System|Systems]] that act on the work done by the [[Domain Model]] layer:

- Tracking Query: access handling of cargos up to now
- Booking: allows to register cargo according to the system availability
- Incident Logging: records each handling of the cargo (providing information for the tracking query app)

#understanding  of [[0 - Domain-Driven Design]]