const phieuBau = [
    { ungCuVien: 'A', soPhieu: 50 },
    { ungCuVien: 'B', soPhieu: 30 },
    { ungCuVien: 'C', soPhieu: 20 }
];

// 1. Tính tổng số phiếu bằng for...of
let tongPhieu = 0;
for (let phieu of phieuBau) {
    tongPhieu += phieu.soPhieu;
}

console.log("Tổng số phiếu:", tongPhieu);

// 2. In chi tiết từng đối tượng bằng for...in
for (let phieu of phieuBau) {
   
    for (let thuocTinh in phieu) {
        console.log(`${thuocTinh}: ${phieu[thuocTinh]}`);
    }
}