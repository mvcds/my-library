Usually we have 3 prices for [[Token|Tokenization]]

- Input: grows exponentially, as [[Large Language Model|LLMs]] don't have [[Memory]], it keeps adding up
- Input Cache: discounted tokens from older input
- Output: more expensive on table, but keeps constant

---

Summarizing the chat history after a bit is a way to go around the pricing, another is after a "point" just start generic answers, or using last messages

---

[[Destilled Model]] is a model that that is trained not directly on the [[Data]] but on a bigger [[Model]] instead

They usually rely on [[Reasoning]] to compensate for the lack of size 

A big model without reasoning probably would get the same answer as the smaller model, but they are [[Cost|costly]] [[Pure Function|Computation]]-wise

---

[[Reasoning]] is using output [[Token|Tokens]] as a way to retro-feed the input without human intervention

No internal [[State]] required


---

[[Large Language Model|LLMs]] do not have [[Time]] keeping