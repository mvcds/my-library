One of the most popular open-source [[Database|Databases]]

To access it use `psql -h <address> -U <user name> -W <dabatase>`

# Good to know

- You have to always end a command with semicolumn, otherwise it might miss-interpret you
- Use double quotation marks for table names but single for [[my-library/carreer/development/Value|values]]
- `\dt` list all tables
- `\d <table_name>` list table's detail
- To get a table's column name `select column_name from information_schema.columns where
table_name='EXAMPLE';`