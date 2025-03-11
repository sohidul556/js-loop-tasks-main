/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
১ থেকে ৪০ পর্যন্ত জোড় সংখ্যা প্রিন্ট করার জন্য একটি লুপ লিখুন। বিজোড় 
সংখ্যা বাদ দিতে "continue" ব্যবহার করুন।
*/

for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) { // যদি সংখ্যা বিজোড় হয়
        continue; // লুপের পরবর্তী পুনরাবৃত্তিতে চলে যান
    }
    console.log(i); // জোড় সংখ্যাটি প্রিন্ট করুন
}

/*
Write a loop to print odd numbers from 1 to 40. Use continue to skip even
numbers.
১ থেকে ৪০ পর্যন্ত বিজোড় সংখ্যা প্রিন্ট করার জন্য একটি লুপ লিখুন। জোড় সংখ্যা বাদ দিতে "continue" ব্যবহার করুন।
*/

for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) { // যদি সংখ্যা জোড় হয়
        continue; // লুপের পরবর্তী পুনরাবৃত্তিতে চলে যান
    }
    console.log(i); // বিজোড় সংখ্যাটি প্রিন্ট করুন
}
