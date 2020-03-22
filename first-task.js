var myName = "George Okanga";
var courses = ["HTML", " CSS", " JS", "Node"];

console.log("My name is " + myName + "," + " and my courses are: " + courses);

var arrayLength = courses.length;

for (i = 1; i <= 200; i +=2) {
    if (arrayLength % 2 !== 0) {
        console.log(i);
    }

    else if (arrayLength % 2 === 0) {
        console.log(i);
    }
}

