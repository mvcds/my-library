https://sendgrid.com/blog/whats-webhook/

1) This means if your application has an error your [[data]] may be lost. Many [[Webhook]]s will pay attention to responses and re-send requests if your application errors out. If your application processed the request and still sent an error, **there may be duplicate data in your app**.

2) Webhooks can make a lot of requests. If your provider has a lot of [[carreer/development/programming/Event]]s to tell you about, they may end up DDoSing your app. Make sure **your application can handle the expected scale of your webhook**.