const cart = [
  { id: 1, name: "Pen",   price: 15, qty: 2 },
  { id: 2, name: "Book",  price: 50, qty: 1 },
  { id: 3, name: "Pouch", price: 80, qty: 1 },
];

// ทำฟังก์ชัน:

// addItem(cart, item) : ถ้ามี id เดิมแล้วให้เพิ่ม qty แทน

// removeItem(cart, id) : ลบออก

// total(cart) : รวมราคารวมทุกชิ้น (ใช้ reduce)

// applyDiscount(cart, fn) : รับฟังก์ชัน fn(total) คืนยอดหลังลด 

const addItem = (cart, item) => {
  const i = cart.findIndex(p => p.id === item.id);
  if (i === -1) return [...cart, item];
  const copy = [...cart];
  copy[i] = { ...copy[i], qty: copy[i].qty + item.qty };
  return copy;
};

const removeItem = (cart, id) => cart.filter(p => p.id !== id);

const total = cart => cart.reduce((sum, p) => sum + p.price * p.qty, 0);

const applyDiscount = (cart, fn) => fn(total(cart)); // HOF

// ใช้งาน
const cart2 = addItem(cart, { id: 2, name: "Book", price: 50, qty: 2 });
const cart3 = removeItem(cart2, 1);
const grand = total(cart3);
const after = applyDiscount(cart3, t => t >= 200 ? t * 0.9 : t); // >=200 ลด 10%

console.log({ grand, after });

