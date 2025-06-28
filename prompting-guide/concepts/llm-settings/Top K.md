An [[OpenAI]]'s [[LLM Settings]]

Just uses the most likely K [[Token|Tokens]] to its [[randomness|random]] selection, similar to [[Temperature]] but more discrete

```promp
Cats like to [k = 2]
```

| Word     | Probability | Selected? |
| -------- | ----------- | --------- |
| Eat      | 0.134       | Yes       |
| Play     | 0.125       | Yes       |
| Sleep    | 0.115       | No        |
| ...      | ...         | No        |
| Lay down | 0.045       | No        |

