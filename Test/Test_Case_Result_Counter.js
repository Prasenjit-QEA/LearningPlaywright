/*After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
 Write a JavaScript program using a for loop that counts how many tests passed, failed, 
 and were skipped. Print a test report with total tests, counts, pass rate percentage, 
 and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).*/

const result = ["pass", "fail", "skip", "fail", "pass", "pass", "pass", "skip"];
let pass = 0;
let fail = 0;
let skip = 0;

for (let i = 0; i < result.length; i++) {
    if (result[i] === "pass") {
        pass++;
    }
    else if (result[i] === "fail") {
        fail++;
    }
    else if (result[i] === "skip") {
        skip++;
    }
}

const totalTest = result.length;
const passRate = ((pass / totalTest) * 100);

let verdict = "";
if (fail === 0 && skip === 0) {
    verdict = "all passed → ready for release";
}
else if (fail + skip <= 2) {
    verdict = "review";
}
else {
    verdict = "block release";
}

console.log(`Total Tests: ${totalTest} Passed: ${pass} Failed: ${fail} Skipped: ${skip} Pass Rate: ${passRate}% VERDICT: ${verdict}`);