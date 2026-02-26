let Year = 2028;
if (Year % 4 === 0 && (Year % 100 != 0 || Year % 400 === 0)) {
    console.log(Year + " is a Leap Year");
}
else {
    console.log(Year + " is not a leap Year");
}