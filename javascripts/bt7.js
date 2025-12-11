function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}
let soNguyenTo = [];
for (let num = 2; num <= 100; num++) {
    if (laSoNguyenTo(num)) {
        soNguyenTo.push(num);
    }
}
console.log("Các số nguyên tố từ 2 đến 100:");
console.log(soNguyenTo.join(", "));