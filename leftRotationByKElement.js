// O(n^2)
let arrOne = [1, 2, 3, 4, 5];
let kOne = 2;

kOne = kOne % arrOne.length;

for (let j = 0; j < kOne; j++) {
  let firstElement = arrOne[0];

  for (let i = 0; i < arrOne.length - 1; i++) {
    arrOne[i] = arrOne[i + 1];
  }

  arrOne[arrOne.length - 1] = firstElement;
}

console.log(arrOne, "arrOne");


// O(n)
let arrTwo = [1, 2, 3, 4, 5];
let outputArrTwo = new Array(arrTwo.length);
let kTwo = 2;

for (let i = 0; i < arrTwo.length; i++) {
  let indexForPickValue = (i + kTwo) % arrTwo.length;
  outputArrTwo[i] = arrTwo[indexForPickValue];
}

console.log(outputArrTwo, "outputArrTwo");
