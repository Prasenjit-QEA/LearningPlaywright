function runStep(stepName, actionFn) {
    console.log(`Starting step: ${stepName}...`);

    try {
        // Execute the callback function
        const result = actionFn();

        // If successful, return the passing result
        return {
            stepName: stepName,
            passed: true,
            message: result
        };

    } catch (error) {
        // If an error is thrown, catch it and return the failing result
        return {
            stepName: stepName,
            passed: false,
            message: error.message || String(error)
        };
    }
}

// --- Example Usage ---

// Example 1: A passing step
const successResult = runStep("open dashboard", () => {
    return "Page loaded";
});
console.log(successResult);
// Output: { stepName: 'open dashboard', passed: true, message: 'Page loaded' }

// Example 2: A failing step
const failResult = runStep("click login button", () => {
    throw new Error("Element not visible");
});
console.log(failResult);
// Output: { stepName: 'click login button', passed: false, message: 'Element not visible' }