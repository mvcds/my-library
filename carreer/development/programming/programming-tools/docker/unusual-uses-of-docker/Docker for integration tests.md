One of the [[Unusual uses of Docker]]

When we want to have integration [[Testing|Tests]] on [[Docker]], we need to run all [[Container|Containers]] in order to create a consistent [[environment]] that doesn't yield flaky tests.

We can use [[Docker Compose]] to do that but the tests themselves don't know when the environment is ready and on the correct state.

Or we can use [[Testcontainers]].
