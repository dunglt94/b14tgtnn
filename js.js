let a1 = [3, 5, 1, 8, -3, 7, 8];
let a2 = [7, 12, 6, 9, 20, 56, 89];
let a3 =[];
let a4= [0, 0, -1, 0, 0, 0];
function findMin(arr) {
    let min = arr[0];
    if (arr.length == 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];}
    }
    return min;
}
let min1 = findMin(a1);
console.log(min1);
let min2 = findMin(a2);
console.log(min2);
let min3 = findMin(a3);
console.log(min3);
let min4 = findMin(a4);
console.log(min4);

function findMinIndex(arr) {
    let minIndex = 0;
    if (arr.length == 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
let minIndex1 = findMinIndex(a1);
console.log(a1[minIndex1]);
let minIndex2 = findMinIndex(a2);
console.log(a2[minIndex2]);
let minIndex3 = findMinIndex(a3);
console.log(minIndex3);
let minIndex4 = findMinIndex(a4);
console.log(a4[minIndex4]);