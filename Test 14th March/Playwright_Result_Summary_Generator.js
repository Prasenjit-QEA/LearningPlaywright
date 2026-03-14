/*You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`,
 where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints
a summary report with total steps, passed count, failed count, skipped count, total duration, 
and a comma-separated list of failed step names.*/

const results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }];

function printSummary(results) {
    const summary = results.reduce((acc, { name, status, durationMs }) => {
        acc.total++;
        acc.duration += durationMs;
        acc[status]++;
        if (status === "failed") {
            acc.failedNames.push(name);
        }

        return acc;
    }, {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        duration: 0,
        failedNames: []
    });

    console.log(`Total Steps: ${summary.total}`);
    console.log(`Passed: ${summary.passed}`);
    console.log(`Failed: ${summary.failed}`);
    console.log(`Skipped: ${summary.skipped}`);
    console.log(`Total Duration: ${summary.duration}ms`);
    console.log(`Failed Steps: ${summary.failedNames.join(',') || 'None'}`);

}

printSummary(results);