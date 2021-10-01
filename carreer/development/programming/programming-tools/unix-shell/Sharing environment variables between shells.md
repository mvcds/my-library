It's possible to share [[environment variable]] between shells by defining a common function in all of them and making them read the same `.env` file

```shell
#~/.env
setenv FOO value-of-foo
```

# [[Fish Shell]]
```shell
#~/.config/fish
function setenv; set -gx $argv; end
source ~/.env
```

# [[Bash]]

```shell
#~/.bashrc
function setenv() { export "$1=$2"; }
. ~/.env
```