If you reject the [[6 - Input Validation]] you need to be careful to not  give possible [[Attacker|Attackers]] more information about your [[system]] that could be exploited for making the attack go further.

The classical example of "echoing [[feedback]]" is saying that "user with email XYZ's password doesn't match with what we have in the system" because this hints attackers that this email exists on the system.

A better feedback, in this case, would be "either the email or the password entered are incorrect"

Instead of giving them feedback, [[Monitoring|Monitor]] possible faulty values.

#understanding of [[0 - Web Security Basics]]