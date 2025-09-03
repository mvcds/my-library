---
aliases:
  - Two-Pointers
---
#procedure 

Maintaining two different indices (or “pointers”) that traverse the [[Array]] or [[string]] simultaneously. The pointers can start:

- From **both ends of the array** and move towards the center.
- From the **beginning of the array**, with one pointer moving faster or slower than the other.

The [[Gist Goal|Goal]] of using two pointers is to solve a problem in [[Big O Notation|linear time (O(n))]], avoiding nested loops that would otherwise result in higher time complexity (like O(n²)).

## When to Use the Two-Pointer Technique

This technique is most effective when:

1. **You need to find pairs or triplets that meet specific conditions** (e.g., a sum of elements).
2. **You need to modify elements in an array or string in-place** (e.g., removing duplicates).
3. **You need to compare elements** in different parts of an array or string (e.g., checking for symmetry).

Common scenarios include:

- Finding pairs that sum to a target in a sorted array.
- Reversing an array or string.
- Removing duplicates from a sorted array.
- Merging two sorted arrays.
- Detecting a palindrome in a string.