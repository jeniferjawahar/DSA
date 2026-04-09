// // reverse an array without using built in functions

// // let arr=[1,2,3,4,5];

// // function reverseArray(arr){
    
// //     let left=0;
// //     let right=arr.length-1;
// //     while(left<=right){
// //         let temp=arr[left];
// //         arr[left]=arr[right];
// //         arr[right]=temp;
// //         left++;
// //         right--;
         
// //     }
// //    console.log(arr)
// // }
// // reverseArray(arr);

// // check if an array is sorted in ascending or descending order
// function checkArray(arr){
// let ascending=true;
// let descending=true;
// for(let i=0;i<arr.length-1;i++)
//    {
//     if(arr[i]>arr[i+1]){
//     ascending=false;
//    }
// if(arr[i]<arr[i+1]){
//     descending=false;
// }
//    }
// return ascending || descending;

// }
// console.log(checkArray([8,9,1,11,12]));

//find the second largest element in an array
// function secondMax(arr){
//     let max=-Infinity;
//     let secondMax=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             secondMax=max;
//             max=arr[i];
//         }
//         if(arr[i]>secondMax&&arr[i]<max){
//             secondMax=arr[i];
//         }
//     }
//     console.log(secondMax);
// }

// secondMax([1,100,3,4,1]);
//remove duplicates from an array
// function removeDuplicates(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }
// removeDuplicates([1,1,2,3,4,4,5])

//move all zeroes to the end of an array
// function moveZeroes(arr){
//     let newArr=[];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             newArr.push(arr[i])
//         }
//     }
//     while(newArr.length<arr.length){
//         newArr.push(0)
//     }
//     console.log(newArr);
// }

// moveZeroes([0,1,0,3,12])


// function moveZeros(arr){
//     let j=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//                 j++;
//         }
//         }
//         console.log(arr);
//     }
// moveZeros([0,1,0,3,12])

// function leftRotate(arr){
//     let first=arr[0];
//     for(let i=0;i<arr.length;i++){
// arr[i]=arr[i+1];
//     }
//     arr[arr.length-1]=first;
//     console.log(arr);
// }

// leftRotate([1,2,3,4,5])

// function rightRoatate(arr){
//     let last=arr[arr.length-1];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i+1]=arr[i];
//     }
//     arr[0]=last;
//     console.log(arr);
// }

// rightRoatate([1,2,3,4,5])


// function sums(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     console.log(sum);
// }

// sums([1,2,3,4,5])

// function findFrequency(arr){
//     let count={};
//     for(let i=0;i<arr.length;i++){
//         if(count[arr[i]]){
//             count[arr[i]]++;
//         }
//         else
//         {
//             count[arr[i]]=1;
//         }

//     }
//     console.log(count);
// }

// findFrequency([1,2,3,4,5,1,2,3])


// function findLongest(str)
// {
//     let words=str.split(" ");
//     let longest="";
//     for(let word of words){
//         if(word.length>longest.length){
//             longest=word;
//         }
//     }
//     console.log(longest);
// }

// findLongest("hellojenifer world this is a test")


// function countWords(str){
// let count=0;
//     for(let i=0;i<str.length;i++){
// if(str[i]!==" " &&(i==0 || str[i-1]==" "))
// count++;
//     }
//     console.log(count);
// }

// countWords("hellojenifer world this is a test fsg dsag ")

// function validAnagram(s,t){
//     if(s.length!==t.length){
//         return false;
//     }
//     let map={};
//     for(let char of s){
//         map[char]=(map[char]||0)+1;
//     }
//     for(let char of t){
//         if(!map[char]){
//             return false;
//         }
//         map[char]--;
//     }
//     return true;
// }

// function intersection(arr1,arr2){
//     let set=new Set(arr1);
//     let result=[];
//     for(let t of arr2){
//         if(set.has(t)){
//             result.push(t);
//             set.delete(t);
//         }
//     }
//     return result;
// }

// console.log(intersection([1,2,2,1],[2,2,1,5]));


// function majorityElement(arr){
    
//     let map={};
//     for(let t of arr){
//         map[t]=(map[t]||0)+1;
//         if(map[t]>(arr.length/2))
//             return t;
//     }
//     return -1;
// }

//  console.log(majorityElement([3,3,4,2,3,3,5]));

// console.log(majorityElement([1,4,5,1,1,5,5,5,5]))

// function longestCheck(arr)
// {
//     let set=new Set(arr);
//     let longest=0;

//     for(let s of arr){
//         if(!set.has(s)){
//             let current=s;
//             let count=1;
//             while(set.has(current+1))
//             {
//                 current++;
//                 count++;
//             }
//                  let longest=Math.max(longest,count)
//         }
   
//     }

// }

// function twoSum(arr,target)
// {
//     let map={};

//     for(let i=0;i<arr.length;i++){
//         let need=target-arr[i];
//         if(map[need]!==undefined){
//             return [map[need],i]
//         }
// map[arr[i]]=i;
//     }
// }

// console.log(twoSum([1,2,5,6],3));

// function checkDuplicates(arr){
   
//     let set=new Set();

//     for( let s of arr){
//         if(set.has(s)){
//             return true;
//         }
//         set.add(s)
//     }
//     return false;
//     // for(let i=0;i<arr.length;i++){
//     //     if(map[arr[i]]!==undefined){
//     //         return true;
//     //     }
//     //     map[arr[i]]=i;
//     // }
//     // return false;
// }

// console.log(checkDuplicates([4,5,6,5,9]));

// function maxElement(arr){
//     let max=-Infinity;

//     for(let s of arr){
//         if(s>max){
//             max=s;
//         }
//     }
//     return max;
// }

// console.log(maxElement([4,6,7,1000,9,100,1001]))

// function missing(arr){
//     let last=arr[arr.length-1];
//     let totalSum=(last*(last+1))/2;
// let sum=0;
//     for(let s of arr){
//         sum=sum+s;
//     }
//     return totalSum-sum;
// }

// console.log(missing([1,2,3,4,5,7]))

// function moveZeros(arr){

//     let j=0;

//     for(let i=0;i<arr.length;i++){

//         if(arr[i]!==0){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//               j++;
//         }
      
//     }

//     return arr;

// }

// console.log(moveZeros([1,0,3,4,0,6]));


// function common(s,t)
// {
//     let ans=[];
 
//     let duplicate=[...new Set(s)];

//     for(let ch of duplicate){
//         if(t.includes(ch))
//         {
//             ans.push(ch)
//         }
//     }

//     console.log(ans)
// }

// common([1,2,4],[4])

// function sliding(arr,k){

//     let sum=0;

//     for(let i=0;i<k;i++){
//         sum=sum+arr[i];
//     }

//     let max = sum;

//     for(let i=k;i<arr.length;i++){
//         sum=+arr[i]-arr[i-k];
//     }
//     return Math.max(sum,max)
// }

// console.log(sliding([1,2,4,5,3,5,4,1,3],3))

// function sliding(arr,k){
//     let sum=0;
//     for(let i=0;i<k;i++){
//         sum=sum+arr[i];
//     }
//     let min=sum;

//     for(let i=k;i<arr.length;i++){
//         sum=sum+arr[i]-arr[i-k];
//         min=Math.min(sum,min);
//     }

//     console.log(min)
// }


// sliding([1,2,3,5,6,7,1,0,1],3)


// function kthlargest(arr,k){
//     arr.sort((a,b)=>b-a);
//     return arr[k-1]
// }

// console.log(kthlargest([1,6,2,7,10,8],2))



// function spaces(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==" "){
//            result+=str[i];
//         }
//     }
//     return result;

  
// }
//   console.log(spaces("jenifer is"))

// function rotate(arr){

//     let last=arr[arr.length-1];

// for(let i=arr.length-1;i>=0;i--){

//     arr[i]=arr[i-1];
// }

//  arr[0]=last;

//  return arr;
// }

// console.log(rotate([8,3,5,2,1,7]))


// function removeSpaces(str){
//     let result="";

//     for(let i=0;i<str.length;i++){
//         if(str[i]!==" "){
//             result+=str[i];
//         }
//     }

//     console.log(result);
// }

// removeSpaces(" jenifer is g")

// function checkString(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]<'0' || str[i]>'9')
//         {
//             return false
//         }
//     }
//     return true;
// }

// console.log(checkString("12fdf"))

// function peak(arr){

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1] && arr[i]
//         )
//     }
// }


// function isPerfect(n)
// { let sum=0;
// for(let i=1;i<n;i++){
// sum+=i;
// }

// if(sum===n)
// {
//     return true;
// }
// else{
//     return false;
// }

// }

// console.log(isPerfect(6))


// function pairDivisor(n){

//     for(let i=1;i*i<=n;i++){

//         console.log(i)

//         if(n%i===0){
//             console.log(i);
//             if (i !== n / i) {
//                 console.log(n / i); // pair divisor
//             }
//         }
//     }

// }


//move all zeroes to the end of an array

function moveZeroes(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j]=arr[i];
            j++;
        }
    }
    while(j<arr.length){
        arr[j]=0;
        j++;
    }

    return arr;
}

console.log(moveZeroes([0,1,0,3,12]))