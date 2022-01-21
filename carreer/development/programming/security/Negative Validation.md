---
aliases: [Blackisting]
---

A  [[Data]] [[validation]] strategy that rejects every input that contains known dangerous values.

The trouble with this approach is that the number of possible bad inputs is extremely large. Maintaining a complete list of potentially dangerous input would be a costly and time consuming endeavor. It would also need to be continually maintained. But sometimes it's your only option, for example in cases of free-form input. If you must blacklist, be very careful to cover all your cases, write good tests, be as restrictive as you can, and reference [[OWASP]]’s [XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet) to learn common methods attackers will use to circumvent your protections.

You should also take care to not just remove problems, as they might be hidden other problems `<scr<script>ipt>` sanitizes to `<script>`