 // array basics 
 const myarray = [0 , 1 , 3,4 , true , "venktesh"]

//  // javascript array is resizable , mixed dataype
//  //1)shallow copy -> refernce is shared
//  // 2)deep copy -> reference is not shared

//   // array methods 
// myarray.push(5);
// myarray.push("8")
// myarray.pop()
// myarray.unshift(100)   // unshift method -> it will add element on start of array
// myarray.shift()   // this will remove element from start of array

// console.log(myarray)

// // .join method ->add all the element of array and give output in string format
 const newarrya = myarray.join()
 console.log(newarrya)
console.log(typeof newarrya)
 
// slice and splice methods

//  // 1)slice opertation = it will not manupulate the orignal array
  
 const slicearr = myarray.slice(0 ,3)
 console.log(`orignal array = ` ,myarray)
 console.log("slice array = " , slicearr)

//   // 2) splice operation = this operation will remove the splices portion from the array in short it will manupulate the array
  const splicearr = myarray.splice(0 ,3)
  console.log("this is splice array = " , splicearr)
  console.log("this is orignal array after splicing" , myarray)
   


