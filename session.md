---
marp: true
theme: gaia
class: invert
paginate: true

---
<!--_color: black-->
<!--_backgroundColor: paleYellow-->


#  <!--fit--> 🔧 DevTools for Testing Web Applications

---

## 🌐 What are DevTools?

- Built-in tools in browsers (Edge, Chrome, Firefox).
- Help developers & testers inspect, debug, and test web apps.
- Essential for **front-end testing** and **debugging issues**.

---

## 🧪 Why Testers Use DevTools?

- Validate **UI rendering** and responsiveness.
- Debug **JavaScript errors**.
- Inspect **network calls** (API requests).
- Analyze **performance bottlenecks**.
- Check **security & accessibility**.

---

## 📋 Key Panels in DevTools

1. **Elements Panel** – Inspect and modify HTML & CSS.  
2. **Console Panel** – View logs and debug JS.  
3. **Network Panel** – Monitor API calls, requests, and responses.  
4. **Performance Panel** – Profile app speed & memory usage.  
5. **Application Panel** – Inspect storage, cookies, session, cache.  
6. **Accessibility Tools** – Audit accessibility issues.

---

## 🔎 Elements Panel (DOM & CSS)

```html
<div class="button primary">Submit</div>
```
- Inspect HTML structure & applied styles.

- Modify CSS on-the-fly.

- Test responsiveness with device emulation.

## ✅ Great for UI testing & layout debugging.

---
## 🖥️ Console Panel (Debugging JS)

```html
console.log("Testing started");
console.error("Error occurred!");
console.table(["Test1", "Test2"]);
```
- View logs, warnings, and errors.

- Run JavaScript snippets directly.

- Useful for functional testing & debugging logic.

---
## 🌐 Network Panel (API Testing)

- Inspect XHR/Fetch requests & responses.

- Validate headers, status codes, payloads.

- Simulate offline mode or slow network.

- Check caching behavior.

## ✅ Helps testers validate API integration.

---
## ⚡ Performance Panel

- Record and analyze runtime performance.

- Detect rendering issues (long tasks, frame drops).

- Memory leak detection.

## ✅ Useful for performance testing.

---
## 🎯 Best Practices for Testers

- Always check console errors during test runs.

- Use device emulation to test responsiveness.

- Validate API calls before reporting UI bugs.

- Record performance traces for slow pages.

- Include accessibility checks in your test process.