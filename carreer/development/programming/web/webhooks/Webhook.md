---
aliases: [Web Callback, HTTP push API, Reverse API]
---

https://sendgrid.com/blog/whats-webhook/
  
A way for an app to provide other applications with real-time information. A webhook delivers data to other applications as it happens, meaning you get data immediately. Unlike typical APIs where you would need to poll for data very frequently in order to get it real-time. 

They give you what amounts to an API spec, and you must design an API for the webhook to use. The webhook will make an HTTP request to your app (typically a POST), and you will then be charged with interpreting it.

The first step in consuming a webhook is giving the webhook provider a URL to deliver requests to. This means that you also need to set up a URL in your app that’s accessible from the public web.

**The easiest way to think of webhooks is as notifications**