let n = 9;
let i = 2;

// Giả định n là số nguyên tố
let check = true;

while (i <= n - 1) {
    if ( n % i == 0) {
        console.log(`${n} Không phải số nguyên tố`);
        // Cập nhật lại giả định
        check = false;
    }
    
    i++;
}

if (check = true) {
    console.log(`${n} là số nguyên tố`);
}