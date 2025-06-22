A [[persistency|persistent]] [[Key-Value Database|Key-Value Store]] that stands for "Remote Dictionary [[Server]]".

Initialize it with `redis-server`, then run commands with `redis-cli` (the commands bellow are also available as a [[Read-Eval Print Loop|REPL]])

```bash
$ redis-cli SET test "Hello\nWorld"
OK
$ GET test
Hello
World
$ redis-cli SET test 6
OK
$ redis-cli INCR test
(integer) 7
```
