Some "rules" that when violating during a [[Linear Regression|regrssion]] will be your biggest mistake.

Assumptions for [[Ordinary least squares]]

1. Linearity: the [[data]] is better fit by a shape other than a line. If your data is not linear, you can transform it in order to  obtain a line.
2. No endogenity: when there is a correlation to a variable and the [[Standard error|error]], it's more likely that a variable was omitted e.g. forgetting that location plays a large role in real-state i.e. the smaller apartments closer to centers might be more expensive than bigger ones far, far away]
3. Normality and Homoscedasciticy: the data is [[Distributions|normally distributed]] and has equal disturbance across all values of the independent variables. For fixing this, logarithms can be used to produce [[Semi-Log]] or [[Log-Log]] [[Model]]s.
4. No autocorrelation: when there is some [[Event correlation|correlation]] between the data e.g. stock prices have high returns by Fridays and low on Mondays. This cannot be fixed, but deted by either [[Scatter Plot|plotting]] the data or using [[Durbin-Watson]] test
5. No multicolinearity: when the relationship of two variables is high up to the point that one of them could be excluded and would explain the results e.g. two neighboring bars could have their beers price based on each other