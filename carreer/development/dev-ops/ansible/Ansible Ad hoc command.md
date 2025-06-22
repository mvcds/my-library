An [Ansible] ad hoc command uses the /usr/bin/ansible command-line tool to automate a single [[Ansible Task|Task]] on one or more [[Ansible Managed Node|Managed Nodes]]. Ad hoc commands are quick and easy, but they are not reusable. So why learn about ad hoc commands? ad hoc commands demonstrate the simplicity and power of Ansible. The concepts you learn here will port over directly to the playbook language

They are great for tasks you repeat rarely. For example, if you want to power off all the machines in your lab for Christmas vacation, you could execute a quick one-liner in Ansible without writing a playbook

For ad hoc tasks, like [[Ansible Playbook|Playbooks]], use a declarative model, calculating and executing the actions required to reach a specified final state. They achieve a form of idempotence by checking the current state before they begin and doing nothing unless the current state is different from the specified final state

To use a different module, pass `-m` for module name. For example, to use the `ansible.builtin.shell module`

`

```bash
ansible raleigh -m ansible.builtin.shell -a 'echo $TERM'
```
