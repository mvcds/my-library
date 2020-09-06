```shell
#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```

It is also possible to shut compose down

`docker-compose down --rmi all`