---
url: https://www.w3schools.com/sql/sql_injection.asp
---

The placement of malicious [[code]] in [[Structured Query Language|SQL]] statements through (user) [[Input]] for executing a [[Digital Attack]]

## 1=1

```js
const txtUserId = getRequestString("UserId");  
const txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```

If there is nothing to prevent a user from entering "wrong" input, the user can enter some "smart" input like `105 OR 1=1` which will always returns `true`, yielding

```sql
SELECT * FROM Users WHERE UserId = 105 OR 1=1;
```

Exposing all columns from all users.

## " OR ""="

```js
const uName = getRequestString("username");  
const uPass = getRequestString("userpassword");  
  
const sql = 'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"'
```

By simply inserting `" OR ""="`, which also will return `true`, into the user name or password text box

```sql
SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""
```

Which is weird but valid SQL

## Batched SQL Statements

Inputing a `;` to allow more than one command

```js
const txtUserId = getRequestString("UserId");  
const txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```

When inputted `105; DROP TABLE Users`

```sql
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Users;
```

# Fighting back

Use [[SQL Parameter Binding]] to fight SQL injections back