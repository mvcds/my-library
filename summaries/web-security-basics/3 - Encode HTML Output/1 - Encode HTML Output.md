Because [[HyperText Markup Language|HTML]] is a very permissive language, that allows us to have embedded [[Execution Context|Execution Contexts]], e.g. render an [[Uniform Resource Locator|URL]] from a HTML produced by a [[Javascript|JS]] framework, we need to be very careful about outputs, as they can end up [[Function Pipeline|chained]] as input for another context, causing external, [[Information Security|insecure]] [[code]] to be executed.

Prefer store raw data so piping them through multiple contexts is easier, but take care to encode them correctly on each of the steps.

#understanding of [[0 - Web Security Basics]]
