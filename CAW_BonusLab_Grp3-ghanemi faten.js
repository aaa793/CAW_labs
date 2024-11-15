//exo1 
//Q1
var v1=5;
var v2=3;

[v1,v2]=[v2,v1];
console.log(v1,v2)

//Q2

const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ]
const foods = ["mango", "pecan pie" ]

CONCAT= [...numbers,...letters,...foods]
console.log(CONCAT)

//Q3

var char= "faten";
var  RES=[...char];

console.log(RES)

//Q4


function fn(a,b,...args) {

    }
 fn(1,2,3,'A','B','C');
 fn(1,2) ;
 let x= ["a","b","c","d"] ; fn(...x) ;


 //args in each case:
 //case1
 //  args: 3,A,B,C
//case2
//  args:
//case3
//  args: c,d


//exo 2 
//Q1

//the first one 


var arr =[3, 5, 8];
const plusOne = arr.map((n) => n + 1);


//the second one 

const double = (arr) => arr.map((val) => val * 2);



//the third one 

    const obj = {
        numbers: {
          a: 1,
          b: 2
        }
      };
      const { a, b } = obj.numbers;

 //   the last one 

 var add = (a, b) => {
    a = a === 0 ? 0 : a || 10;
    b = b === 0 ? 0 : b || 10;
    return a + b;
};


//exo3 
//Q1
  const setOne = (arr) => [...new Set(arr)];
  console.log(setOne([1, 2, 2, 3, 4, 4, 5, 5, 5])); 



//Q2
var getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));


console.log(getRidOf([10, 20, 30, 40, 50, 60], 20, 40, 70)); 

