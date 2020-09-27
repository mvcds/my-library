Compose is a tool for defining and running multi-container [[Docker]] applications. With Compose, you use a Compose file to configure your application’s services. Then, using a single instruction, you create and start all the services from your configuration

# Steps

1. Define your [[app]]’s [[environment]] with a [[Dockerfile]] so it can be reproduced anywhere.
2. Define the [[service]]s that make up your app in [[docker-compose.yml]] so they can be run together in an isolated environment.
3. Lastly, run docker-compose up and Compose will start and run your entire app.