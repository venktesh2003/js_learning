// In javascript arrays take all the dataype values inside it

const myarray = [1 , 2, 3]
const myarray2=[4,5,6]

// /myarray.push(myarray2)   // this will push on exsiting array means changes will be made in existing arrat

console.log(myarray)   // [ 1, 2, 3, [ 4, 5, 6 ] ]
 
//if you want to access the 5 
// console.log(myarray[3][1])

// 2)concat method -> this method will create new array it will not manupulate the existing array


mynewarray =myarray.concat(myarray2)
console.log(mynewarray);   //[ 1, 2, 3, 4, 5, 6 ]

// 3)spread (...array name) -> this will give same op is concat but we can spread more than 4 arrays

let array3 = [1,2,4,6,7]
let array4 = [8 , 9, 10, 11]
let array5 = ["A" , "B" , "C" , "D"]
let ans = [...array3 , ...array4 , ...array5]
console.log(ans)

// 4)flat method = if you want all the array element in single element fromat than use flat
   // .flat(depth_no) // this will take the depth till what deplth it should look

   let deptharray = [1 , 2, 3 ,[4,5,6,7,8] , 10 , ['A' , ['B' , 'C', ['D' , 'E' , 'F']]]]
   console.log('orignal depth array = ' , deptharray);

   console.log('this is flat array' , deptharray.flat(Infinity)) // thjis will flat the array and give output in single array form
   
   //5)create any array from the string 
   
   let arrayy = "Hitesh"
   console.log(Array.from(arrayy))

   // 6)create an array from objects

   let obj = {
      name:"venktesh" , 
      age : 20 , 
      gender:"male"

   }

   // this will give an empty array because we need to specify the keys or value to which we want to crete array

   console.log(Array.from(obj)) // imporant

// 7)Array.of(variables) this will create an array from the different values

let s1 = 400 
let s2 = 500
let s3 = 600
console.log(s1 , s2, s3)