https://sendgrid.com/blog/whats-webhook/

Debugging a [[Webhook]] can be [[complex]] at [[Time]]s, as webhooks are principally asynchronous. Thus, you must trigger them and wait, then check the response.

Steps 

- Understand what the webhook provides, by using a tool like RequestBin to collect the webhook's request
- [[Mock Object|Mock]] the request using a tool like [[cURL]] or [[Postman]]
- [[Testing|Test]] the code on your machine by using a tool like [[NGrok]]
- Watch the whole flow using a tool like [[Runscope]]