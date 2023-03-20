---
aliases: [Variable, Variables]
---

[[Ansible Managed Node|Host]] and [[Ansible Group|Group]] variable files must use YAML syntax.

---

We document adding variables in the main inventory file for simplicity. However, storing variables in separate host and group variable files is a more robust approach to describing your system policy. Setting variables in the main inventory file is only a shorthand. See

```INI
[atlanta]
host1 http_port=80 maxRequestsPerChild=808
host2 http_port=303 maxRequestsPerChild=909
```

```YAML
atlanta:
  hosts:
    host1:
      http_port: 80
      maxRequestsPerChild: 808
    host2:
      http_port: 303
      maxRequestsPerChild: 909
```

`ansible_port` amd `ansible_host` are host variables
