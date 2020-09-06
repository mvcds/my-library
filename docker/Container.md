A container is a running [[instance]] of an [[Image]]

# Instructions

- Run/Access container: `docker-compose run --rm <name> bash`
- List running container: `docker ps`
- Run command on running container: `docker exec -it <container ID> bash`
- Run log continually: `docker-compose logs -f``