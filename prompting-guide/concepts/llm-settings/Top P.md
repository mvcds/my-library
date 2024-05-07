An [[OpenAI]]'s [[LLM Settings]]

The lower, the more [[Determinism|deterministic]]. But contrary to [[Temperature]], it's based on the confidence of the [[Token|Tokens]] on the rank  (it looks at the cumulative [[Probability|Probabilitics]] cut off for token selection).

It effectively looks more at more [[diversity|diverse]] tokens, even if they are less likely when compared with temperature

![[It's not recommended to use Temperature and Top P simultaneously]]