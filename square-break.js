/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

এমন একটি লুপ লিখুন যা ১ থেকে ১০০ পর্যন্ত যায়, কিন্তু প্রথম বর্গ সংখ্যার (যেমন ৪, ৯, ১৬, ইত্যাদি) মুখোমুখি হলে (ব্রেক ব্যবহার করে) থেমে যায়।

*/

for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) { // Check if the number is a perfect square
   console.log(`Found the first square number: ${i}`);
        break; // Exit the loop
    }
    console.log(i);
}

/*
for (let num = 1; num <= 100; num++) {
    console.log(num); // বর্তমান সংখ্যাটি প্রিন্ট করুন
    if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) { // এটি কি একটি বর্গ সংখ্যা তা চেক করুন
        break; // যদি এটি বর্গ সংখ্যা হয়, লুপ থামান
    }
}

---------------------------------------
কোডের ব্যাখ্যা:
1.Math.sqrt(num) ব্যবহার করে সংখ্যাটির বর্গমূল বের করা হয়।

2.চেক করা হয় যে বর্গমূলটি পূর্ণসংখ্যা কিনা, Math.floor(Math.sqrt(num)) এর সাথে তুলনা করে।

4.যদি এটি একটি বর্গ সংখ্যা হয়, break ব্যবহার করে লুপটি থেমে যায়।

*/