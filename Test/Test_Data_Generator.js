/*As an SDET, you frequently need to generate test data for form testing.
Write a JavaScript program that generates test user data using a for loop.
Each user should have a unique ID (USR-0001 format), name, email, and role 
(cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive 
(edge case testing). Demonstrate proper use of var (global counter), let (loop variables), 
and const (fixed values).*/
var counter = 0;

function generateTestData(empCount) {

    const roles = ["admin", "editor", "viewer", "tester", "manager"];
    for (let i = 1; i < empCount; i++) {
        counter++;
        let ID = "USR-" + String(i).padStart(4, 0);
        let name = "UserName_" + i;
        let email = "username" + i + "@test.com";

        let role = roles[(i - 1) % roles.length];

        let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

        console.log(`${ID} |${name} | ${email} |${role} | ${status}`);
    }
}

generateTestData(10);
