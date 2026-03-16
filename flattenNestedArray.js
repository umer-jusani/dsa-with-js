export default function flatten(value) {
  const newArr = [];

  for (let i = 0; i < value?.length; i++) {
    if (Array.isArray(value[i])) {
      let a = flatten(value[i]);
      newArr.push(...a);
    } else {
      newArr.push(value[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, [2, [3, [4, [5]]]]]));
