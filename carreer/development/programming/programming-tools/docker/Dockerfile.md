File with [[Image]] instructions, so the [[environment]] can be reproduced everywhere

# Instructions

- FROM — specifies the base (parent) image.
- LABEL —provides metadata. Good place to include maintainer info.
- ENV — sets a persistent [[environment variable]].
- RUN —runs a [[Command]] and creates an image layer. Used to install packages into [[Container]]s.
- COPY — copies files and directories to the container.
- ADD — copies files and directories to the container. Can unpack local .[[tar]] files.
- CMD — provides a instruction and [[Argument]]s for an executing container. Parameters can be overridden. There can be only one CMD.
- WORKDIR — sets the working [[directory]] for the [[instruction]]s that follow.
- ARG — defines a [[variable]] to pass to [[Docker]] at [[build-time]].
- ENTRYPOINT — provides instruction and [[Argument]]s for an executing container. [[Argument]]s persist.
- EXPOSE — exposes a [[port]].
- VOLUME — creates a directory mount point to access and store persistent [[data]].

# Effective Caching

https://towardsdatascience.com/slimming-down-your-docker-images-275f0ca9337e

If you’re using a [[package installe]]r such as [[pip]] with a requirements.txt file, then follow a model like the one below to make sure you don’t receive a stale intermediate image with the old packages listed in requirements.txt.

```dockerfile
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
COPY . /tmp/
```

---

[[Cache|Caching]] can be turned off by passing `--no-cache=True` with docker build.
