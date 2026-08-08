
// Stack (Primitive), Heap (Non-Primitive)

// Primitive data types are stored in Stack
let myYoutubename = "hiteshchoudharydotcom"

// A copy of the value is created
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


// Non-Primitive data types are stored in Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

// Both variables refer to the same object in Heap
let userTwo = userOne

// Changing userTwo also changes userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);