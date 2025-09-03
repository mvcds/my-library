> Ca we break this [[User Story]] down (vertically) on...

(and make it simpler, more understandable and easier to estimate & order)

1. [[Workflow]] steps? - steps in an order process, like selecting a payment option, delivery method, etc
   - What steps does a user perform?
   - Are all of the steps necessary now?
   - Can them be simplified for now?
2. [[Acceptance Criteria|Business rules]]? - Rules in a process or its [[Acceptance Criterium|Acceptance Criteria]] e.g. no order below 10 dollars, no shipping abroad
   - What rules apply to the user story?
   - Are all business rules necessary now?
   - Can simpler rules suffice?
3. [[happiness|happy]]/unhappy flow? - Failures during a webshop order processes and possible recovery options
   - What does each flow look like?
   - Are all of the unhappy flow necessary?
   - Can the unhappy flows be simplified for now?
4. [[Input]] options? - tablets, desktop, etc?
   - which [[Platform|Platforms]] are supported
   - Are all of them required right now?
   - Are some platforms harder to implement than others?
5. [[Type System|Datatypes]] and [[Parameter|Parameters]]? - Different search options / strategies or different kinds of reports (tables, graphs, etc)
   - What datatypes are supported and relevant?
   - Which parameterised views are there?
   - Are all parameters relevant at the moment?
6. [[CRUD|Operations]]? - Breaking down on [[Create, Read, Update, Reapeat|CRUD]
   - What operations does the story entail?
   - Are all the operations necessary right now?
7. [[Test cases]]? - Some test scenarios may be very [[complex]], but not highly relevant at this time
   - What test scenarios are used to verify this story?
   - Are all of them relevant at the moment?
8. [[Actors and Roles|Roles]]? - A [[customer]] can create orders, admins can mage them, etc
   - Which roles are involved in this story?
   - What can the roles do?
   - Are all roles necessary now?
9. [[Browser]] compatibility? - Ignoring support for [[Internet Explorer]] 9 because only a fraction of users make use of it
   - What browsers have to be supported?
   - Are all of them important at this point?
10. Optimize now or later? - Implementing autocomplete for addresses, usage of GPS-location
    - What optimisations can we think of [[UX/UI]]?
    - Are all of them necessary now?
11. [[Logging]] and Error Handling[^1] - logging can help us understand the product real usage
    - Which errors happen more frequently?
    - What prevents users from reaching critical points?

#cheatsheet by [[Christiaan Verwijs]]

Possible solutions for the problems above include but are not limited to:[^1]

- Static vs Dynamic
- Hard-coded vs Real Data
- 0 vs 1 vs many
- Pagination
- Filtering

Part of [[0 - Unlearning user stories and focus on incremental deliveries]]

[^1]: Not part of the original cheatsheet, I've added it
