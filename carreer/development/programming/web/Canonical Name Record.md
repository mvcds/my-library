---
aliases: [CNAME]
---

A type of resource record in the [[Domain Name System|DNS]] used to specify that a domain name is an alias for another domain (the 'canonical' domain).

This can prove convenient when running multiple services (like an FTP server and a webserver; each running on different ports) from a single IP address. One can, for example, point `ftp.example.com` and `www.example.com` to the DNS entry for `example.com`, which in turn has an [[Address Record|A Record]], this way changes on the IP are only done on the **A Record**.

CNAME records must always point to another domain name, never directly to an IP address.