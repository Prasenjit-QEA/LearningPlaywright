/*In UI automation (Cypress/Playwright), you often need to validate element states before 
interacting with them. Write a JavaScript program that checks an element's properties (isPresent,
isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. 
Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled),
 HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
*/

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;
let status = "";
let severity = "";
let action = "";

if (isPresent === false) {
    status = "NOT FOUND";
}
else if (isPresent && isDisplayed && isEnabled) {
    status = "READY";
}
else if (isPresent && isDisplayed) {
    status = "DISABLED";
}
else {
    status = "HIDDEN";
}

severity = (status === "NOT FOUND") ? "CRITICAL" : (status === "READY" ? "OK" : "WARNING");

if (status === "NOT FOUND") {
    action = "Element not found in DOM. Check selector.";
}
else if (status === "HIDDEN") {
    action = "Element is present but not displayed. Check CSS or loading state.";
}
else if (status === "DISABLED") {
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
else {
    action = "Element is ready for interaction";
}

console.log(`Status ${status} Severity ${severity} Action ${action}`);