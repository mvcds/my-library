---
aliases: [Playbook, Playbooks]
---

They contain [[Ansible Play|Plays]] This is both an ‘execution concept’ and how we describe the files on which `ansible-playbook` operates. Playbooks are written in YAML and are easy to read, write, share and understand.

---

In this example, the first play targets the web servers; the second play targets the database servers.

```yaml
- name: Update web servers
  hosts: webservers
  remote_user: root

  tasks:
  - name: Ensure apache is at the latest version
    ansible.builtin.yum:
      name: httpd
      state: latest
  - name: Write the apache config file
    ansible.builtin.template:
      src: /srv/httpd.j2
      dest: /etc/httpd.conf

- name: Update db servers
  hosts: databases
  remote_user: root

  tasks:
  - name: Ensure postgresql is at the latest version
    ansible.builtin.yum:
      name: postgresql
      state: latest
  - name: Ensure that postgresql is started
    ansible.builtin.service:
      name: postgresql
      state: started
```


