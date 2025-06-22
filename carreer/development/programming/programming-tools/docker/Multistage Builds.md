Multistage builds use multiple FROM instructions. You can selectively copy files, called build artifacts, from one stage to another. You can leave behind anything you don’t want in the final image.

Each FROM instruction

- begins a new stage of the build.
- leaves behind any [[State]] created in prior stages.
- can use a different base.

```
FROM golang:1.7.3 AS build
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html
COPY app.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=build /go/src/github.com/alexellis/href-counter/app .
CMD ["./app"]
```

Note that we name the first stage by appending a name to the FROM instruction to name. The named stage is then be referred to in the COPY --from= instruction later in the [[Dockerfile]].
