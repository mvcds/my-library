As per [[ChatGPT]]

# Breakdown

1. **Understand the Problem**: Carefully read and understand the problem statement before you start coding. Make sure you grasp the requirements.
2. **Plan Before You Code**: Take some time to plan your approach. Consider different algorithms and data structures that might be relevant.
3. **Pseudocode**: It can be helpful to write pseudocode before diving into the actual code. This helps you outline your logic.
4. **Coding Neatly**: Write clean and organized code. Use meaningful variable names and comments as needed.
5. **Test Your Code**: After writing your solution, test it thoroughly with different test cases. This demonstrates your attention to detail.
6. **Optimization**: If time allows, think about optimizing your code. Discuss trade-offs if you decide to optimize.
7. **Communication**: If you're stuck or need clarification, don't hesitate to ask questions or discuss your thought process with the interviewer.
8. **Time Management**: Keep an eye on the time and allocate it wisely. It's okay to ask the interviewer for time checks.
9. **Handle Edge Cases**: Don't forget to consider edge cases in your code.
10. **Follow-Up**: After completing the challenge, you might want to explain your code, its time complexity, and any improvements you could make.

# Data Structures

1. **Arrays:**
    - Access: O(1)
    - Search: O(n)
    - Insertion/Deletion (at the end): O(1) if dynamic, O(n) if resizing is required
2. **Linked Lists:**
    - Access: O(n)
    - Search: O(n)
    - Insertion/Deletion (at the beginning): O(1)
3. **Stacks:**
    - Push/Pop: O(1)
4. **Queues:**
    - Enqueue/Dequeue: O(1)
5. **Hash Tables:**
    - Insertion/Retrieval (average): O(1)
    - Worst-case (with collisions): O(n)
6. **Trees:**
    - Binary Search Tree (BST) operations (average): O(log n)
    - In a balanced tree, e.g., AVL or Red-Black: O(log n)
    - In an unbalanced tree: O(n)
7. **Heaps:**
    - Insertion/Extract-Min: O(log n)
8. **Graphs:**
    - Graph Traversal (DFS, BFS): O(V + E), where V is the number of vertices, and E is the number of edges.
    - Dijkstra's Algorithm: O(V^2) with an adjacency matrix, O(E + V log V) with a min-heap (for non-negative weights)
    - Kruskal's Algorithm: O(E log E) or O(E log V)
9. **Sets:**
    - Set operations (e.g., Union, Intersection): O(n) in the worst case
10. **Trie:**
    - Insertion/Search: O(k), where k is the length of the key

# **Algorithms

- **Searching Algorithms:**
    - Linear Search: O(n)
    - Binary Search: O(log n)
- **Sorting Algorithms:**
    - Quick Sort: O(n log n) on average, worst-case O(n^2)
    - Merge Sort: O(n log n)
    - Bubble Sort: O(n^2)
    - Insertion Sort: O(n^2)
- **Graph Algorithms:**
    - Depth-First Search (DFS): O(V + E)
    - Breadth-First Search (BFS): O(V + E)
    - Dijkstra's Algorithm: O(V^2) or O(E + V log V)
    - Kruskal's Algorithm: O(E log E) or O(E log V)
- **Dynamic Programming:**
    - It varies depending on the problem. Commonly O(n^2) or better.
- **Greedy Algorithms:**
    - It varies depending on the problem.
- **Divide and Conquer:**
    - Finding the maximum subarray (Kadane's Algorithm): O(n)
    - Fast Fourier Transform (FFT): O(n log n)[[]()]()