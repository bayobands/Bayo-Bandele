## Code Smells

# Bad Varibale Names

The original code used names like c, a, b, and h. These don’t describe what the values actually store, which makes the program harder to read.

No more c, b, or a. Everything has meaningful names.

# Duplicate Code

All three buttons (increment, decrement, reset) repeated the same steps: update counter display update document title change background color.

All three buttons use updateUI() instead of repeating the same logic.

Functions are short and focused
setupUI() builds the DOM.
setupEvents() wires buttons.
updateUI() updates visuals.
start() orchestrates the app.
