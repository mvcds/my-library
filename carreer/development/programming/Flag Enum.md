---
aliases:
  - Flag Enums
  - Mask
  - Masking
  - Bit Field
  - Bit Fields
  - Bitmask
  - Bitmasks
  - Bitmasking
---
#concept #procedure 

A way to [[Enum|Enumerate]] [[binary]] [[carreer/development/Value|Values]] so that they can act as a non-exclusive combinatory [[System]] for the same variable

```typescript
enum Permissions {
  Read = 1 << 0,    // 00001
  Write = 1 << 1,   // 00010
  Execute = 1 << 2, // 00100
  Delete = 1 << 3,  // 01000
  Admin = 1 << 4,   // 10000
}

let userPerms = await fetchPerms()

userPerms |= Permissions.Write; //Add them

if (userPerms & Permissions.Read) {
  // user has Read permissios
}


userPerms &= ~Permissions.Write; //Remove
userPerms ^= Permissions.Delete; //Toogle

const sum = Permissions.Read | Permissions.Write

if ((userPerms & sum) === sum) {
	// has both Read AND Write
}

if (userPerms & sum !== 0) {
	// has some of Read OR Write
}
```

