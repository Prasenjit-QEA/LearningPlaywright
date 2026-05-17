let arr = [1, 2, 3];

//Add to END
arr.push(4);
console.log(arr);

//Remove from END
arr.pop();
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

//Remove from BEGINNING
arr.shift();
console.log(arr);

//splice
arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);//add 99 at index 2 but don't delete anythign as 0 I mentioned

arr.splice(1, 2, 10, 20);
console.log(arr);