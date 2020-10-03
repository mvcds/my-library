[[Git]]

# Commands

- `git clone --recursive <path>`
- `git pull --recurse-submodules`
- `git submodule init` (if you didn't cloned with)
- `git submodule foreach <commands>`
- `git submodule update --recursive --remote` (when updating local links)
- `git submodule update --init` (when adding local links)

# Changing submodule

- `git config --global status.submoduleSummary true`
- `git config --global diff.submodule log` it polutes the difference listing submodules' log