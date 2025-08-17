// เขียนฟังก์ชัน findEvens(...nums) ที่รับตัวเลขเข้ามาหลายๆ ตัว แล้ว return เฉพาะเลขคู่เป็น array

function findEvens(...nums) {
  let evens = [];
  for (let n of nums) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}

console.log(findEvens(1, 2, 3, 4, 5, 6)); 

// shallow equality

function shallowEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }


  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);


  if (keysA.length !== keysB.length) return false;


  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      return false; 
    }
  }

  return true;
}

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2 };

console.log(shallowEqual(obj3, obj4)); 
