/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

একটি while লুপ লিখুন যা 1 থেকে শুরু করে সংখ্যা যোগ করে, কিন্তু 
যোগফল 100 এ পৌঁছানোর সাথে সাথে বা অতিক্রম করার সাথে সাথে বন্ধ হয়ে যায় (break ব্যবহার করে)।
*/

let sum = 0;
let number = 1;

while (true) {
    sum += number; // Add the current number to the sum
    if (sum >= 100) {
        console.log(`Sum has reached ${sum}. Exiting the loop.`);
        break; // Exit the loop if sum is 100 or more
    }
    number++; // Increment the number
}

console.log(`Final sum: ${sum}`);


/*
let sum = 0;
let number = 1;

while (true) {
    sum += number; // বর্তমান সংখ্যাটি যোগ করুন
    if (sum >= 100) { // যদি যোগফল ১০০ বা তার বেশি হয়
        console.log(`Sum has reached ${sum}. Exiting the loop.`);
        break; // লুপ থেকে বেরিয়ে আসুন
    }
    number++; // পরবর্তী সংখ্যায় যান
}

console.log(`Final sum: ${sum}`);

----------------------------------------------------

let sum = 0;
let number = 1;

while (true) {
    sum += number; // বর্তমান সংখ্যাটি যোগ করুন
    if (sum >= 100) { // যদি যোগফল ১০০ বা তার বেশি হয়
        console.log(`Sum has reached ${sum}. Exiting the loop.`);
        break; // লুপ থেকে বেরিয়ে আসুন
    }
    number++; // পরবর্তী সংখ্যায় যান
}

console.log(`Final sum: ${sum}`);

---------------------------------------------------------

### ব্যাখ্যা:
1. let sum = 0;    যোগফল শুরু করার জন্য প্রাথমিক মান।
2. let number = 1;  ১ থেকে সংখ্যা শুরু করে।
3. while (true)    এটি একটি অসীম লুপ যা ম্যানুয়ালি বন্ধ করতে হবে।
4. sum += number;  বর্তমান সংখ্যাটি যোগফলে যোগ করে।
5. if (sum >= 100) চেক করে যে যোগফল ১০০ বা তার বেশি হয়েছে কি না।
6. break            শর্ত পূরণ হলে লুপ বন্ধ করতে ব্যবহৃত হয়।
7. number++        পরবর্তী সংখ্যায় যায়।

এই কোডটি চালানোর পরে এটি ১ থেকে শুরু করে সংখ্যা যোগ করবে এবং ১০০ পৌঁছানোর সাথে সাথে বন্ধ হয়ে যাবে। 😊

*/
