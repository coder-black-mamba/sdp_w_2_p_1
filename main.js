// // grade making
// const number=20;


// if (number <=100 && number >= 80) {
//     console.log("You Got A+");  
// }else if(number < 80 && number >= 70){
//     console.log("You Got A");  
// }else if(number < 70 && number >= 60){
//     console.log("You Got A-");  
// }else if(number < 60 && number >= 50){
//     console.log("You Got B+");  
// }else if(number < 50 && number >= 40){
//     console.log("You Got B");  
// }else if(number < 40 && number >= 33){
//     console.log("You Got B-");  
// }else if(number < 33 ){
//     console.log("You Fucked UP :) ");  
// }

// // Array Sorting Example

// // Create an array of numbers
// const numbers = [5, 2, 8, 1, 9, 4];

// // Sort numbers in ascending order
// numbers.sort((a, b) => a - b);
// console.log("Sorted numbers:", numbers);

// // Sort numbers in descending order
// numbers.sort((a, b) => b - a);
// console.log("Descending sort:", numbers);

// // Sort strings alphabetically
// const names = ["John", "Alice", "Bob", "Zoe"];
// names.sort();
// console.log("Sorted names:", names);

// // Sort objects by a property
// const people = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 30 }
// ];
// people.sort((a, b) => a.age - b.age);
// console.log("Sorted by age:", people);

// grade making
// const inputNumber = 20;

// if (inputNumber <= 100 && inputNumber >= 80) {
//     console.log("You Got A+");  
// } else if(inputNumber < 80 && inputNumber >= 70){
//     console.log("You Got A");  
// } else if(inputNumber < 70 && inputNumber >= 60){
//     console.log("You Got A-");  
// } else if(inputNumber < 60 && inputNumber >= 50){
//     console.log("You Got B+");  
// } else if(inputNumber < 50 && inputNumber >= 40){
//     console.log("You Got B");  
// } else if(inputNumber < 40 && inputNumber >= 33){
//     console.log("You Got B-");  
// } else if(inputNumber < 33 ){
//     console.log("You Fucked UP :) ");  
// }

// console.log("\n");
// even or odd number

const inputted_nbr=10;

function is_even(nbr){
    nbr=Number(nbr);
    return nbr%2 === 0;
}

if (is_even(inputted_nbr)) {
    console.log(inputted_nbr + " Is An Even Number");
}else{
    console.log(inputted_nbr + " Is An Odd Number");
}

// sort the arr from 1-20
const elomelo_arr=[1,4,5,6,2,9,3,8,7,19,18,20,17,14,15,16,13,12,11,10];
elomelo_arr.sort((a,b)=>a-b);
// console.log(elomelo_arr.sort());
// console.log(elomelo_arr);




// leap year or not
const year = 2025;

const is_leap_year=(year) => year %4===0;

// console.log(is_leap_year(2024));
// console.log(is_leap_year(2025));

function divisor_1_50(){
    for(i=1;i<=50;i++){
        if(i%3===0&&i%5===0){
            console.log(i);
        }
    }
}

// divisor_1_50();

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom","SayedIsAVeryGoodBoy"];

let biggest_name=friends[0];
friends.forEach(friend=>{
    if(biggest_name.length<friend.length){
        biggest_name=friend;
    }
})

// console.log(biggest_name);
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const unique_numbers=new Set(numbers);
// console.log(Array.from(unique_numbers));

function find_highest_from_arr(arr){
    let highest = arr[0];
    arr.forEach(el=>{
        if(el>highest){
            highest=el;
        }
    })
    return highest;
}

// console.log(find_highest_from_arr(numbers));