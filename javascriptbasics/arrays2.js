// const arr =[1, 2, 3, 4];

// const rev = arr.reverse();

// console.log(rev);

// const letters =["a ", "b ", "c"];

// const rev2 = letters.reverse();

// for (i = 0; i < 4; i++){
//     console.log(letters[i])
// }


// function sum(arr){
// let s = 0;
// for(let i = 0; i < arr.length; i++){
//     s = s + arr[i]
//    }
//    console.log(s)
// }


// sum([73, 29, 45, 90, 34])

// add ([2, 10, 69, 40])

// function add(arra){
//     add = 0;
//     for(let i = 0; i < arra.length; i++){
//         add = add + arra[i]
//     }
//     console.log(add)
// }


const numms =[1, 2, 3, 4, 5];

function largest (numms){
highest = 0;
for(let i = 0; i < numms.length; i++){
    if(numms[i] > highest){
        highest = numms[i];
        }
    
    }
    return highest;
}
console.log(largest(numms))