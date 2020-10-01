https://stackify.com/php-debugging-guide/

What you can try on [[PHP]]

- `var_dump ($var)` dumps the variable type and value to stdout.
- `print_r ($var)` prints the variable value in human-readable form to stdout.
- `get_defined_vars()` gets all the defined variables including built-ins and custom variables (`print_r `to view them).
- `debug_zval_dump ($var)` dumps the variable with its reference counts. This is useful when there are multiple paths to update a single [[Object|reference]].
- `debug_print_backtrace()` prints a backtrace that shows the current [[function]] call-chain.
- `debug_backtrace()` gets the backtrace. You can `print_r`, log it to a file, or send it to a logging endpoint asynchronously.