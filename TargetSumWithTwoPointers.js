let numbers = [2, 3, 7, 1, 5];
numbers = numbers.sort((a, b) => a - b);

console.log(numbers)

let i = 0;
let j = numbers.length - 1;
let target = 9;



while((numbers[i] + numbers[j]) !== target) {
  let isBiggerThanTarget = numbers[i] + numbers[j] > target;
 
  if(isBiggerThanTarget) {
    j -= 1;
  }else {
    i += 1;
  }
  
}

console.log(numbers[i], numbers[j]);
