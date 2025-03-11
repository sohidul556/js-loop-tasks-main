/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
৫৫ থেকে ৮৫ পর্যন্ত বিজোড় সংখ্যা প্রদর্শন করুন এবং ৫ দ্বারা বিভাজ্য সংখ্যাগুলি এড়িয়ে যান।
*/


for (let i = 55; i <= 85; i++) {
    if (i % 2 !== 0 && i % 5 !== 0) { // Check if the number is odd and not divisible by 5
        console.log(i);
    }
}





