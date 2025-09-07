// เขียนฟังก์ชัน analyzeArray(arr) (เป็น arrow function) ที่รับอาเรย์ผสม (number, string, object) โดย:

// คืนวัตถุ { counts: {numbers, strings, objects}, topNumbers: [สามค่ามากสุด], cleaned: <ไม่แก้ต้นฉบับ> }

// cleaned คืออาเรย์ที่เอาเฉพาะ non-null/undefined items (ใช้ .filter()), ห้ามแก้ arr ต้นฉบับ

const mixed = [3, 'a', null, {x:1}, 10, 'b', 7, undefined];
const analyzeArray = (arr) => {

  const cleaned = arr.filter(x => x !== null && x !== undefined);
  
  const counts = cleaned.reduce((acc, x) => {
    if (typeof x === 'number') acc.numbers++;
    else if (typeof x === 'string') acc.strings++;
    else if (typeof x === 'object') acc.objects++;
    return acc;
  }, {numbers:0, strings:0, objects:0});

  const topNumbers = cleaned
    .filter(x => typeof x === 'number')
    .slice()                
    .sort((a,b) => b-a)
    .slice(0,3);

  return {counts, topNumbers, cleaned};
};

console.log(analyzeArray(mixed));


