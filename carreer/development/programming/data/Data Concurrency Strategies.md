Overriding [[Data]] is a risk we have if we want to create applications that can show [[Concurrency]]

# Optimistic

A [[Software]] verifies, as part of its update [[Process#Noun|process]], if the data has changed since it has been read e.g. if two users of Wikipedia update simultaneously, the second cannot simply override the first - both need to understand and acknowledge the changes

# Pessimistic

One part locks the data for update by other parts until it is done with it. Some parts might have priorities, like in a master-slave relationship

# Last Writer Wind

In some scenarios, there's no need to verify if the data that we are changing contains the most recent updates i.e. short-lived data streams or scenarios where the likelihood of multiple simultaneous accesses is low