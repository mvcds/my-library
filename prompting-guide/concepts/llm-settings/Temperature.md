An [[OpenAI]]'s [[LLM Settings]]

It changes the [[Weight|Weights]] of other possible [[Token|Tokens]], by [[randomness|randomizing]] their generation making or capping [[creativity]]

A low temperature is more [[Determinism|deterministic]] than a higher one

![[It's not recommended to use Temperature and Top P simultaneously]]

---

The temperature [[Skewness|skews]] the [[Probability]] of a [[Token]] to come out

```promp
Cats like to [temp = 0]
```

| Word     | Probability | Scaled Probability |
| -------- | ----------- | ------------------ |
| Eat      | 0.134       | 0.999              |
| Play     | 0.125       | 0.000...           |
| Sleep    | 0.115       | 0.000...           |
| ...      | ...         | ...                |
| Lay down | 0.045       | 0.000...           |

```promp
Cats like to [temp = 1]
```

| Word     | Probability | Scaled Probability |
| -------- | ----------- | ------------------ |
| Eat      | 0.134       | 0.055              |
| Play     | 0.125       | 0.055              |
| Sleep    | 0.115       | 0.055              |
| ...      | ...         | ...                |
| Lay down | 0.045       | 0.055              |

