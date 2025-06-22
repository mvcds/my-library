When using [[Docker]]

```shell
#!/bin/bash
# Stop all containers
docker kill $(docker ps -q)
# Delete all containers
docker rm -f $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
# Delete all volumes
docker volume rm $(docker volume ls -q)
```

It is also possible to shut compose down

`docker-compose down --rmi all`
