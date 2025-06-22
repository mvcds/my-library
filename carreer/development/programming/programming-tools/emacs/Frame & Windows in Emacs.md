The "frame" is the whole screen of a [[Emacs]] program, and a "window" is a section of it. Closing a "window" **does not** mean closing a "[[Buffer in Emacs|buffer]]".

# Bindings

- `C-x o` Switch cursor to another window. Try this now to switch between your Clojure file and the [[Read-Eval Print Loop|REPL]] e.
- `C-x 1` Delete all other windows, leaving only the current window in the frame. This doesn’t close your buffers, and it won’t cause you to lose any work.
- `C-x 2` Split frame above and below.
- `C-x 3` Split frame side by side.
- `C-x 0` Delete current window.
