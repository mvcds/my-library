---
aliases:
  [
    Inventory,
    Inventories,
    Inventory Source,
    Inventory Sources,
    Hostfile,
    Hostfiles,
  ]
---

A list of [[Ansible Managed Node|Managed Nodes]] provided by one or more ‘inventory sources’. Your inventory can specify information specific to each node, like IP address. It is also used for assigning groups, that both allow for node selection in the [[Ansible Play|Play]] and bulk variable assignment.

The simplest inventory is a single file with a list of hosts and groups. The default location for this file is `/etc/ansible/hosts`. You can specify a different inventory file at the command line using the `-i <path>` option or in configuration using `inventory`.

They are loaded according to the filename order. If you define parent [[Ansible Group|Groups]] in one file or directory and child groups in other files or directories, the files that define the child groups must be loaded first

Basic inventory file on INI format

```INI
mail.example.com

[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com
```

And on YAML

```yaml
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
```
