The N+1 query problem happens when the data access framework executed N additional SQL statements to fetch the same data that could have been retrieved when executing the primary SQL query.

The larger the [[my-library/carreer/development/Value|Value]] of N, the more queries will be executed, the larger the performance impact. And, unlike the slow query log that can help you find slow running queries, the N+1 issue won’t be spot because each individual additional query runs sufficiently fast to not trigger the slow query log.
