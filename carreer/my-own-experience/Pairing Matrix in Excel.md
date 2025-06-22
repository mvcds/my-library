In [[Excel]] it is possible to do a pairing matrix out of logging participants by using the following formula

`=SUMPRODUCT($B:$B = $E7,$C:$C = G$1)+SUMPRODUCT($B:$B = G$1,$C:$C = $E7)`

Where `B` and `C` are the columns for the people, and `E` and `G` are the row and column that make up the matrix's headers.

And `E` and `G` are a list of people's names to be matched with `B` and `C`
