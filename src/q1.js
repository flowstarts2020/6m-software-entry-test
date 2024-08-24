/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: def swap_values(x, y):
    # Check if both x and y are numeric
    if not (isinstance(x, (int, float)) and isinstance(y, (int, float))):
        return -1
    
    # Swapping without using a third variable
    x, y = y, x
    
    # Print the swapped values
    print("Swapped values: x =", x, ", y =", y)
    
    return x, y

# Example usage
x_val = 10
y_val = 20
result = swap_values(x_val, y_val)
if result == -1:
    print("Error: x or y is not numeric.")

}

// Task 2: result1 = swap_values("Apple", 10)
if result1 == -1:
    print("Error: x or y is not numeric.")
result2 = swap_values(9, 17)
if result2 != -1:
    print("Swapped values: x =", result2[0], ", y =", result2[1])

