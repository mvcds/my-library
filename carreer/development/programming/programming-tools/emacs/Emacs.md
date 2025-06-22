Basically a [[Lisp]] Interpreter

The [[term]] key binding derives from the fact that Emacs binds keystrokes to commands, which are just Lisp functions (I’ll use command and [[function]] interchangeably). For example, `C-x b` is bound to the function `switch-to-buffer`. Likewise, `C-x C-s` is bound to `save-file`.

You can also run commands by name, without a specific key binding, using `M-x function-name` (for example, `M-x save-buffer`). `M` stands for _meta_, a key that modern keyboards don’t possess but which is mapped to **alt** on Windows and Linux and **option** on Macs. `M-x runs` the `smex `command, which prompts you for the name of another command to be run.

- `M-` is equivalent to press `esc`
- `C-x b` opens a new buffer or changes to an old one
- `C-x k` kills the [[Buffer in Emacs|buffer]]
- `C-g` quits the command
- `C-x C-f` opens the file directory
- `C-x C-s` saves the file, though it's possible to save them with "normal" commands
- `C-k` kills the line
- `C-/` undoes changes, though it's possible to undo them with "normal" commands
- `C-spc` creates a region where the commands are applied
