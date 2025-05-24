// const coding  = ["java" , "Python" , "cpp"]
//  // using for each loop 

//  coding.forEach((iitems)=>{
//     console.log(iitems)
//  })

 // note for each will not return any array or anty value

 // 2)Filter : this will return the values
  

//  const mynums = [1,2,4,5,6,7,8,9]
//  const values = mynums.filter((items)=>{
//    return items>4
//  })

//  console.log(values);
 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const mybook = books.filter((bk)=> {
   return bk.genre === "Fiction"
  })

  console.log(mybook)

  const publishdate = books.filter( (bk) =>{
   return bk.publish > 2001
  })
  console.log(publishdate)


  // 3)MAP REDUCE : 

  const mynumbers = [1,2,4,5,6,7,8,0]

  const newnum= mynumbers.map( (num)=>{
             return num+10
  })
  console.log(newnum)

  // chaining method : we can use methods as chain

  let array = [1,2,3,4,5,6,7,8,9]
  let ans = array.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>nums > 40)
  console.log(ans)

   // 3 REDUCE : reduce consist of accumulator which take default value
 //ex 
  
 let array1 = [1,2,4,5,6,7,8,9]
 let val= array1.reduce(function(accumulator , currval){
   console.log(`accumualator = ${accumulator} and current value = ${currval}`)
   return accumulator+currval
 } , 0)

 let use_arrow = array1.reduce((accumulator , currval)=>accumulator+currval , 0)
 console.log(use_arrow)


 let shoppingcart = [
    {
       item : "js course" , 
       price: 10000
    } , 

    {
       item : "Python course" , 
       price: 12000
    } , 

    {
       item : "datascience course" , 
       price: 10000
    }
]

let total  = shoppingcart.reduce((acc , items)=>items.price+acc , 0)
console.log(total)