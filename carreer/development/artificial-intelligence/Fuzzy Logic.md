It's possible to have "degrees" of true, where 1 is absolutely true, and 0 is absolutely false but everything between is also a valid.

Fuzzy logic allow us to use a more natural language when compared to [[Boolean]] logic, for instance, we can classify not in terms of numbers (which humans take longer to read and understand) but words (as tall, weak, fast, etc) which are easier for us to process)

All fuzzy rule are evaluated in parallel, yielding the strength of its conclusion. 

It may be necessary to defuzzyfi a [[my-library/carreer/development/Value|Value]], turning it into a crisp number.

# Steps

- Fuzzification Process: mapping crisp [[data]] (real numbers) to fuzzy data
- Membership/Characteristic [[Function]]s: functions which map input to a degree between 0 and 1 in a fuzzy set
- Hedge functions (optional): modify the degree of membership outputs by a membership function (eg: the word VERY)
- Fuzzy rules: yielding some output from combining the inputs in a logical manner