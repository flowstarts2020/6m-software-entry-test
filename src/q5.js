let person = {
  firstName : "Jane",
  lastName :  "Smith",
  hobby : "swimming"
}

/*
Explanation:
Destructuring is a way of extracting multiple values from data stored in objects and arrays. It allows us to have an array or object that we are working with, but we only need some of the items contained in these.
- https://www.w3schools.com/react/react_es6_destructuring.asp

The form of this function is using the arrow function format. It allows for short syntax among other things.
- https://www.w3schools.com/react/react_es6_arrow.asp

Task 1: Modify this function to use object destructuring for the inputs to display only the first name and hobby properties of the object to the console:
*/
const introduce = () => {
  // Function using object destructuring
function displayPersonInfo({ firstName, hobby }) {
    console.log("First Name:", firstName);
    console.log("Hobby:", hobby);
}

// Example usage
let person = {
  firstName: "Jane",
  lastName: "Smith",
  hobby: "swimming"
}

displayPersonInfo(person);

}

introduce(person);
//The output should be "Hello, my name is Jane and I love swimming!"
