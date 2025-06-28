An [[OpenAI]]'s [[LLM Settings]]

The lower, the more [[Determinism|deterministic]]. But contrary to [[Temperature]], it's based on the confidence of the [[Token|Tokens]] on the rank (it looks at the cumulative [[Probability|Probabilitics]] cut off for token selection).

It effectively looks more at more [[diversity|diverse]] tokens, even if they are less likely when compared with temperature

![[It's not recommended to use Temperature and Top P simultaneously]]

---

Similar to [[Top K]] but picks up [[Token|Tokens]] based on their combined probability up to P

```promp
Cats like to [P = 0.3]
```

| Word     | Probability | Picked UP                                                  |
| -------- | ----------- | ---------------------------------------------------------- |
| Eat      | 0.134       | Yes                                                        |
| Play     | 0.125       | Yes                                                        |
| Sleep    | 0.115       | Yes                                                        |
| Run      | 0.110       | No (this is the first word after the 0.3 has been reached) |
| ...      | ...         | No                                                         |
| Lay down | 0.045       | No                                                         |

