// pramod@live.com - Valid
// pramod@dasda - Not valid
let email = "pras'en@test2.cco";

let emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

if (emailRegex.test(email)) {
    console.log(`${email} - Valid `);
} else {
    console.log(`${email} - Not Valid `);
}
