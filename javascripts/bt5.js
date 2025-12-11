let soTienVay;
const laiSuat = 0.05; // 5%

// Nhập và kiểm tra hợp lệ
do {
    soTienVay = prompt("Nhập số tiền vay (100 < số tiền < 1000 USD):");
    soTienVay = Number(soTienVay);
} while (isNaN(soTienVay) || soTienVay <= 100 || soTienVay >= 1000);

// Tính lãi kép
let soDu = soTienVay;
let nam = 1;

while (nam <= 10) {
    soDu = soDu * (1 + laiSuat);

        console.log("Năm " + nam + ": Số dư = " + soDu.toFixed(2) + " USD");

    // Dừng nếu số dư vượt gấp đôi tiền vay ban đầu
    if (soDu > soTienVay * 2) {
        console.log("Số dư đã vượt gấp đôi số tiền vay! Dừng tính toán.");
        break;
    }
    
    nam++;
}