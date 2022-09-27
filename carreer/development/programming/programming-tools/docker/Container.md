A container is a running [[instance]] of an [[Image]]

# Instructions

- Run/Access container: `docker-compose run --rm <name> bash`
- List running container: `docker ps`
- Run instruction on running container: `docker exec -it <container ID> bash`
- Run [[Logging|log]] continually: `docker-compose logs -f``