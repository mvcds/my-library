[[Docker Compose]] can restart/replace files when they change by running `docker compose watch` on a compose file that has the `develop` keyword

```yml
//compose.yml
services:
	frontend:
		...
		build:
			dockerFile: docker/dev.Dockerfile
			context: ./app
		develop:
			watch:
				- action: sync // for files without recompiling
				  path: <build.context>
				  target: /usr/src/app
				  ignore:
					- node_modules/
				- action: rebuild
					path: <build.context>/package.json
```
