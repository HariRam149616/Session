// function firstFunction() {
//     secondFunction();
// }
// function secondFunction() {
//     thirdFunction();
// }
// function thirdFunction() {
//     throw new Error("Something went wrong!");
// }
// try {
//     firstFunction();
// }
// catch (error) {
//     if (error instanceof Error) {
//         console.log("Error Message:", error.message);
//         console.log("Stack Trace:", error.stack); // Displays the stack trace
//     }
// }
function calculateSum(a, b) {
    var sum = a + b; // Set a breakpoint here
    return sum;
}
function greetUser(name) {
    var greeting = "Hello, ".concat(name, "!"); // Set a breakpoint here
    console.log(greeting);
}
// Main function
function main() {
    var result = calculateSum('text', 10); // Set a breakpoint here
    //   console.log(`The sum is: ${result}`);
    greetUser("25");
}
main();
function add(a, b) {
    var result = a + b;
    return result;
}
function main1() {
    var x = 10;
    var y = 20;
    var sum = add(x, y); // <-- Set a breakpoint here
    console.log("Sum is:", sum);
}
main1();
