#fact in [[1 - Reliable, scalable, and maintainable applications]]

[[Twitter]] started with case 1 but as it didn't scale, it changed to case 2 and now it is heading to case 3

This happens because celebrities have tons of [[User|Users]], so writing becomes expensive if their [[Fan out]] [[carreer/development/data-science/Metric|Metric]] is 5 seconds

# Cases

1. When reading each timeline, fetch all relevant tweets
2. When writing a tweet, write in all follower's timelines
3. Mix cases 1 and 2, diverging [[behavior]] based on how many followers the author has