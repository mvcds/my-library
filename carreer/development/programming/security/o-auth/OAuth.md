This [[Communication Protocol|Protocol]], that focus only on [[Authorization]], has 4 parts

- [[Asset|Resource]] Owner: it is the [[Entity]] capable of granting access to resources
- Resource [[Server]]: it hosts the protected resources if the right [[Security Token|Token]] is provided
- [[Authorization]] Server: a [[Security Token Service|server]] issuing access token to the clients
- [[Client]]: a [[Software]] requesting access to the resource

In an hotel analogy, the hotel is the **Resource Owner**, the clerk is the **Authorization Server**, that after payment give you a key/card is the **Token** to access the room which is the **Resource** - to access it, you need to have a key that matches the lock, the **Resource Server**

The protocol doesn't specify how things are done, just the "flow" of things.
