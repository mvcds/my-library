A process through which a team (developers, [[business]] experts, POs, etc), create a diagram that shows the flow of [[Event in DDD|events]]

Characteristics:
- Can be used to analyze and/or model the [[Domain]]
- Collaborative technique
- Stays within the [[business]]' existing flow
- Tells who handles those events
- Shows the contexts to which [[Actors and Roles|roles]] belong

You should:
- Not model too much at once
- Focus on a specific story

Normally, it is used by using color-coded post-its to represent different things:
- Event (yellow): something that interests the [[business]]
- Action (blue): what do we want to do with the event
- Questions (red): things we are not sure about yet[^1]
- [[Policy and Details|Policy]] (purple): controls how the actions plays out
- Human activities (yellow): actions/events with human input
- External [[system]]s (pink): occurrences from the outside world
- [[Entity in DDD|Entity]] (light yellow): the system entities together with the [[Bounded Context]] that they below[^3]

![[event-storming.png]][^2]


After this it's possible to derivate a [[Context Map]] from the event storming session

We can also derivate a [[Classes-Responsibilities-Collaborator|CRC]] from it

#learn

[^1]: It is not recommended to start [[Code|coding]] if there are still question post-its
[^2]: He uses an "X" to indicate the end of the flow, the doll (green) to indicate human and the hourglass (pink) to indicate time passing - if events are stacked up, they are happen in [[Parallelism|parallel]]
[^3]: He uses a line to separate the entity (top) from the context (bottom)