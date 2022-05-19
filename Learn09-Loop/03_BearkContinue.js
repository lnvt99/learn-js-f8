/* BREAK - CONTINUE */

// 1. BREAK
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if( i >= 5) break;
// }

// 2. CONTINUE
for (let i = 0; i < 10; i++) {
    if( i % 2 == 0) continue;
    console.log(i)
}