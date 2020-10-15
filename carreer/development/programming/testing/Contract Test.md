A [[test double]] can be used to isolate your tests from third parties integration but [[testing]] contracts inform you when the third parties change their contracts.

Testing contracts can happen on a different pipeline than your regular tests, like happening periodically and in case of failure, they can trigger an action to solve the contract

They not necessary need to test the content of the data, but rather its shape.

If you're able to test your contract in pre-prod (of the third parties pipeline), it's better because you get aware of the changes even before they go to production (this pairs up nicely with [[Continous Delivery]]).