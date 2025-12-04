--Code Smells I Found
1. Confusing Variable Names
The original code used names like c, a, b, and h.
These don’t describe what the values actually store, which makes the program harder to read.
2. Magic Strings Everywhere
IDs like "increment", "dec", "reset" and text values were typed directly inside the code multiple times.
If anything changes, you’d have to manually update every spot → very error-prone.
3. Repeated Code
All three buttons (increment, decrement, reset) repeated the same steps:
update counter display
update document title
change background color
This is classic duplicate code.
