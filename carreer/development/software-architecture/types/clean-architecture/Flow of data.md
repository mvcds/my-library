![[flow-of-data.png]]

Describes how [[data]] should flow according to [[Clean Architecture]]:

1. The [[User]] event goes to the [[Model-View-Presenter Architecture|Presenter]]
2. Presenter pass it to the [[Use Case]]
3. UC makes a request to the [[domain-driven-design/concepts/domain-objects/Repository|Repository]]
4. Repository does its magic and gets the real [[Data]] somewhere, creating the real [[Entity]].
5. Repository return Entity to UC
6. UC does its magic and gets the result to the Presenter
7. Presenter displays the result to the [[User Interface|UI]]
