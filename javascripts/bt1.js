let diemSo = [12, 8, 15, 20, 5, 18, 22, 10, 7, 14];
let tong = 0;
for (let i=0; i < diemSo.length; i++) {
    tong+= diemSo[i];
}
console.log("Tổng điểm đội:" + tong);
if (tong > 100) {
    console.log("Đội thắng!");
}