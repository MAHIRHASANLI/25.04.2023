
///////////////////-------------------------------------------TASK3---------------------------------------------///////////////////////////

//  element -in deyeri null ve undefined olmayanlari qaytar

let data = [
    {
        name: 'daniel',
        age: 45
    },
    {
        name: 'john',
        age: 34
    },
    {
        name: 'robert',
        age: null
    },
    {
        name: 'jen',
        age: undefined
    },
    {
        name: null,
        age: undefined
    }
];

let task1 = data.filter((product) => product.name!=null && product.age!=undefined  )
console.log(task1)

///////////////////------------------------------------------TASK2---------------------------------------------//////////////////////////
// her telebenin pointini 30 bal artirin
const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
  ];

  students.forEach((value)=>value.points+=30)
  
 console.log(students);


 ///////////////////------------------------------------------TASK3---------------------------------------------//////////////////////////

// - isharesini / ile deyishin
// output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
let task3=bdays.map((value)=>{
if(value.includes("-")){
   return value.replace("-","/")
}
else{
    return value
}
})
console.log(task3);


 ///////////////////------------------------------------------TASK4---------------------------------------------//////////////////////////

// butun regemlerini yuvarlaqlashdirin


let numbers = [1.5, 2.56, 5.1, 12.33];
 
let task4 = numbers.map((number)=>{
return Math.round(number)
})
console.log(task4);


 ///////////////////------------------------------------------TASK5---------------------------------------------//////////////////////////

//  Verilmish stringdeki ededleri cemleyin --> reduce 

const b = "5,4,3,2,1";
let arr=b.split(",");
let replay=[];

arr.forEach((value)=>{
    replay.push(value);
   
})
//

// arr= JSON.parse(b);
let sum=replay.reduce((total,value)=>{
    return total + value;
})
console.log(sum);

///////////////////------------------------------------------IMAGE1---------------------------------------------//////////////////////////

let array = [23,32,44,54,9,75,12,17,6]
//A
let A=array.map((value)=>{
    return value
})
console.log(A);

//B
let B=Math.max(...array);
console.log(B);

//C
array.splice(array.length,0,15);
console.log(array);

//D
array.splice(0,1);
console.log(array);

//E
array.sort()
console.log(array[array.length-1])

//F
array.splice(3,0,43);
console.log(array);

//G
let e=[]
for (let i = 3; i < array.length; i++) {
    e.push(array[i])
    console.log(array[i]);
};
console.log(e);

//H
array.forEach((value)=>{
    console.log(value);
})

//I
let iz= []
for (let i = 0; i < array.length; i++) {
    if(array[i]>40){
        iz.push(array[i])
    }
    
}
console.log(iz);
let bb=array.filter((value)=>{
     if(value>40){
        return value
     }
})
console.log(bb);


///////////////////------------------------------------------IMAGE2---------------------------------------------//////////////////////////
    // 1ci usul
getStudentsname=[
    {name:"Stave"},
    {name:"Mike"},
    {name:"John"}
]
let azz=getStudentsname.map((value)=>{
    return value.name
    })
    console.log(azz);

    // 2ci usul
function getStudentsname(arr){
   let bolear=[]
   arr.map(({name})=>{
bolear.push(name)
   })
   return bolear
}
console.log(getStudentsname=[{name:"Stave"},{name:"Mike"},{name:"John"}]);


///////////////////------------------------------------------IMAGE3---------------------------------------------//////////////////////////


function checkFactors(arrr,num){
    let boolar=[];
    for (let i = 0; i < arrr.length; i++) {
        if(num%arrr[i]==0){
            boolar.push(true)
        }
        else{
            boolar.push(false)
        }
    }
    if(boolar.every((item)=>item==true)){
        return true;
    }
    else{
        return false;
    }
};
console.log(checkFactors([2,3,4],12));




///////////////////------------------------------------------IMAGE4---------------------------------------------//////////////////////////
array4=[]
function task(num1,num2){
for (let i = num1; i < num2+1; i++) {
   array4.push(i)

}

}

task(1,5)
console.log(array4)

















