let numbers=[1,2,3,4,5,6,7,8,9,10]

// console.log(numbers[0]);

// for loop

// for(i=1;i<=10;i++){
//     console.log(numbers[i]);
// }

// foreach loop

// let num=numbers.forEach( (num) => {
//     console.log(num);
// })
// console.log(num);

// filter loop

// let num=numbers.filter( (num) => (num>5))

// console.log(num);

// map loop

// let num=numbers.map( (num) => ( num*10))
//  console.log(num);

// chainig method

// let num=numbers
//             .map( (num) => ( num*10))
//             .map( (num) => (num+1))
//             .filter( (num)=>( num>50))


// console.log(num);

// reduce method

let item=[
    {
        course:"english",
        price:2000
    },{
        course:"math",
        price:4000
        
    },{
        course:"bio",
        price:5000
    },{
        course:"urdu",
        price:1000
    }
]
//  let total=item.reduce( (acc,curritem) => (acc+curritem.price),0)

//  console.log(total);

let total=item.reduce( function (acc,curr){
    console.log(`acc: ${acc} and curr:${curr.price}`);
    return acc+curr.price
    
},8000)
console.log(total);


