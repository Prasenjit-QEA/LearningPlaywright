function planBrowserExecution(allBrowsers, blockedBrowsers) {

    const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));

    const blocked = allBrowsers.filter(browser => blockedBrowsers.includes(browser));

    const plan = `Run on: ${runnable.join(', ')} | Skip: ${blocked.join(', ')}`;

    // Return the final object
    return {
        runnable: runnable,
        blocked: blocked,
        plan: plan
    };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const executionPlan = planBrowserExecution(allBrowsers, blockedBrowsers);
console.log(executionPlan);