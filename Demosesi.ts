/* Console.log

//stack trace/debugging example.
function firstFunction() {
    secondFunction();
}
function secondFunction() {
    thirdFunction();
}
function thirdFunction() {
    throw new Error("Something went wrong!");
}
try {
    firstFunction();
}
catch (error) {
    if (error instanceof Error) {
        console.log("Error Message:", error.message);
        console.log("Stack Trace:", error.stack); // Displays the stack trace
    }
}

//2. Incorrect Function Arguments
function multiply(a, b) {
  return a * b;
}

function caller() {
  return multiply(5); // Only one argument
}

caller();


function calculateSum(a: any, b: any): any {
    const sum = a + b; // Set a breakpoint here
    return sum;
}

function greetUser(name: string): void {
    const greeting = `Hello, ${name}!`; // Set a breakpoint here
    console.log(greeting);
}

// Main function
function main(): void {
    const result = calculateSum('text', 10); // Set a breakpoint here
 //   console.log(`The sum is: ${result}`);
    greetUser("25");
}

main();

function add(a: number, b: number): number {
  let result = a + b;
  return result;
}

function main1() {
  let x = 10;
  let y = 20;
  let sum = add(x, y); // <-- Set a breakpoint here
  console.log("Sum is:", sum);
}

main1(); */
