---
aliases: [SQL Parameters Binding, SQL Parameter, SQL Parameters, Parameter Binding, Parameters Binding]
---

A [[Value]] that is added to an [[Structured Query Language|SQL]] query at execution time, in a controlled manner.

The SQL engine checks each [[parameter]] to ensure that it is correct for its column and are treated literally, and not as part of the SQL to be executed.

```c#
txtUserId = getRequestString("UserId");  
sql = "SELECT * FROM Customers WHERE CustomerId = @0";  
command = new SqlCommand(sql);  
command.Parameters.AddWithValue("@0",txtUserId);  
command.ExecuteReader();
```