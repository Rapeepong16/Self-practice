//1.Given an array of numbers, create an object showing how many times each number appears.
function countNumber(arr){
  let frequencyNum = {};

  for (let i = 0 ; i < arr.length; i++){
    let num = arr[i];
    if (frequencyNum[num]){
      frequencyNum[num]++;
    }else{
      frequencyNum[num] = 1;
    }
  }
  return frequencyNum
}

// console.log(countNumber([2, 3, 2, 5, 3, 2, 5]));

//2.Write a function that takes an array and returns a new array with all duplicates removed, but do not use Set or built-in .filter() with .indexOf() tricks. Use only loops and if statements.
function removeDuplicates(arr) {
  let uniqueArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let exists = false; 
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        exists = true;
        break; 
      }
    }
    
    if (!exists) {
      uniqueArr.push(arr[i]); 
    }
  }
  return uniqueArr;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
