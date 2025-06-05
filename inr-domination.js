let number = Number(prompt("Enter the Number"));
let output = [];

if (number >= 500) {
    output.push(`500:${Math.floor(number / 500)}`);
    number = number % 500;
}
if (number >= 200) {
    output.push(`200:${Math.floor(number / 200)}`);
    number = number % 200;
}
if (number >= 100) {
    output.push(`100:${Math.floor(number / 100)}`);
    number = number % 100;
}
if (number >= 20) {
    output.push(`20:${Math.floor(number / 20)}`);
    number = number % 20;
}

console.log(output, "output");
