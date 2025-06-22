---
aliases: [Request for Comments, RFC, RFCs, Design Doc, Design Docs]
---

The act of writing down planned changes, so to have other [[Developer vs Architect|Engineers]] can comment on your key decisions **before** we start working on those changes, like a preemptive [[Code Review]].

I found out that for me, RFCs seems to work better when initially it is restricted to comment only by main stakeholders, and once it is approved, open it up to other engineers.

RFCs can be broken down by discipline and/or domain, and normally will yield a [[Architecture Decision Record|ADR]]

# Templates

They will evolve according to what a company thinks it matters for them.

## Both

- List of approvers
- Abstract (what is the project about?)
- Status
- Architecture changes
- [[Customer]] support considerations
- Documents & References
- ADR
- Decision
- Consequences
- Tradeoffs

## Backend

- Service SLAs
- Service dependencies
- Load & performance testing
- Multi data-center concerns
- Security considerations
- Testing & rollout
- Metrics & monitoring

## Mobile/Web

- UI & UX
- Network interactions detailed
- Library dependencies
- Security concerns
- Testing & rollout
- Analytics
- [[Accessibility]]
