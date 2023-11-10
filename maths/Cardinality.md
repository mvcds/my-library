The property of [[Algebraic data types]] that relates how many values a [[Type System|Type]] can have e.g. [[Boolean]] has 2

This is useful to know when talking about what a [[Function]] can return, for instance, in the case of [[Fuzzy Logic]] using `true`, `false`or `null` as possibilities of return, the "boolean" cardinality would increase by 1 (for [[Javascript]] due to `undefined`, it could increase by 2).

On the other hand, if `true` or `false`are somehow represented as a string, such cardinality becomes infinite, if we don't generalize i.e. if we don't put [[Policy and Details|Business Rules]] around the accepted returned values: in case the return type is different from `"true"`, `"false"` or `null`, we "cast" it to `"false"`