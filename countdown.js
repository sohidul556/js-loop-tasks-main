/***

Implement a countdown timer that counts down from 21 to 15.

 */
/*
let countdown = 21;

const timer = setInterval(() => {
    console.log(countdown);
    countdown--;

    if (countdown < 15) {
        clearInterval(timer); // Stop the timer when it reaches 15
        console.log("Countdown finished!");
    }
}, 1000); // 1000 milliseconds = 1 second

*/
let countdown = 21;

const timer = setInterval(() => { // setInterval ফাংশনটি প্রতিটি ১ সেকেন্ড অন্তর চালায়।
    console.log(countdown); // বর্তমান সংখ্যাটি প্রিন্ট করা
    countdown--;

    if (countdown < 15) { // যদি ১৫ এর চেয়ে কমে পৌঁছে
        clearInterval(timer); // টাইমার বন্ধ করা
        console.log("Countdown complete!");
    }
}, 1000); // ১০০০ মিলিসেকেন্ড = ১ সেকেন্ড

