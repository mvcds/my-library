A [[Design Pattern]] that builds on top of the [[Observer Pattern]] by adding an [[Fundamental theorem of software engineering|indirection]] (the Message Broker or Message Bus).

The Publishers send messages to the broker instead of sending directly to the Subscribers, so one part does not know about the other.

#complement