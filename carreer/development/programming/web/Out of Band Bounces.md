---
aliases: [OBB, Asynchronous Bounces]
---

https://www.sparkpost.com/docs/faq/out-of-band-bounces/

In order to explain what OBB is, we first need to understand how a recipient [[server]] accepts [[email]].

In most cases, a recipient server will either accept or reject an email as it comes in. In those cases it will look at the email, and issue a code 250, which means the message is accepted. If it’s going to bounce, it will issue a code in the 400’s or 500’s, such as a 550.

However, there are some recipient servers that are configured to accept incoming emails in a holding state, and determine later whether the emails are going to be sent to the inbox, or rejected and bounced. Thus, these bounces can take a while to appear, and in this case you may see both an acceptance of the email, and lagit ster a bounce. This is why we call them Out of Band, because the bounce would arrive outside of the normal email server transaction.
