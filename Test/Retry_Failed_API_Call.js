/*In automation testing, API calls sometimes fail due to network issues.
 Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
 The program should retry a maximum of 5 times. Simulate random success/failure using Math.random()
 (40% chance of success: randomValue > 0.6). Log each attempt and print the final result*/

const maxAttempt = 5;
let isSuccess = false;
let attempt = 0;
do {
    attempt++;
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        isSuccess = true;
        console.log(`Attempt ${attempt}: SUCCESS (Response 200 OK) `);
    } else {
        console.log(`Attempt ${attempt}: FAILED (Timeout/Error)`);
    }
}
while (!isSuccess && attempt < maxAttempt);

if (isSuccess) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${maxAttempt} attempts.`);
}