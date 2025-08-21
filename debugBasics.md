---
marp: true
theme: gaia
class: invert
paginate: true

---
<!--_color: bwhitelack-->
<!--_backgroundColor: skyBlue-->
# <!--fit-->🐞 Basics of Debugging in TS

---

## 🎯 What is Debugging?

- The process of **finding and fixing errors** in code.  
- Helps improve **code quality** and **application stability**.  
- Debugging tools make it easier to:  
  - Inspect variables  
  - Trace program flow  
  - Identify bugs efficiently  

---

## 🛠️ Debugging Techniques

*  **Using `console.log()`**  
*  **Using Breakpoints**  
*  **Reading the Stack Trace**  

---

## 📝 Method 1: Using `console.log()`

✅ Prints values to the console.
✅ Helps check variables & program flow.
⚠️ But can clutter code if overused.

```Typescript
let num = 5;
let result = num * 2;
console.log("Result:", result); // Debugging output
```
---
## 📍 Method 2: Using Breakpoints

* Set breakpoints in DevTools (Edge/Chrome).

* Code execution pauses at that line.

* Allows inspection of:

  - Variable values

  - Function calls

  - Execution flow

## ✅ More powerful than console.log.
---
## 🔎 Visual: Breakpoints in DevTools

Line numbers highlighted in Red = breakpoint.

Execution pauses on that line.

Variables & call stack shown in side panel.

```Typescript
function main1() {
  let x = 10;
  let y = 20;
  let sum = add(x, y); // <-- Set a breakpoint here
  console.log("Sum is:", sum);
}
main1();
```

---
📚 Method 3: Stack Trace

* Shows the sequence of function calls that led to an error.

* Appears in the console when an exception occurs.

## 🔍 Visual: Stack Trace Example

* Error message with call chain.

* Each function listed in order of execution.

* Helps track down the root cause.
---


```Typescript
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
```
---