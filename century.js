/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.
১ থেকে ২০০ পর্যন্ত একটি লুপ লিখুন। ১০০ খুঁজে পেলে ব্রেক ব্যবহার করে লুপ থেকে বেরিয়ে আসুন।

*/

/*
for (let i = 1; i <= 200; i++) {
    if (i === 100) { // যদি ১০০ পাওয়া যায়
        console.log(`Found ${i}, exiting the loop.`); // `${i} খুঁজে পেলাম, লুপ থেকে বেরিয়ে আসছি।`
        break; // লুপ থেকে বেরিয়ে আসা
    }
    console.log(i);
}


*/
 for(let i = 1;i <= 200; i++){
    if(i===100){
        console.log('Found the 100 exiting the');
        break;
    }
    console.log(i);
 }
