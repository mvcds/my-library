One of the [[Unusual uses of Docker]]

We can use [[Docker]] to prevent mismatches between the [[package manager]] and the tooling used to build our [[Software|App]]

# Running containers

We provide an [[Image]] that contains all the versions of a tooling for the app, and`docker run -it -v <volume> <working-dir>`

# Using a single source of truth

  We can use [[Docker Compose]] to have the `compose.yml` as a single source of truth for our tooling, then we run`docker compose run --rm <service> <command>`.

```yml
//compose.yml
version: '3.8''
services:
	terraform:
		image: hashicorp/terraform-1.4.0
		volumes:
			- /terraform:/infra
		working-dir: /infra
```

Alternatively, instead of running this manyally, we cal also use [[Docker Compose Watch]]