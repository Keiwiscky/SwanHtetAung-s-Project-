let email ="keiwiscky@gmail.com";
let password ="GODACE12";

if (email === "keiwiscky@gmail.com" && password === "GODACE123"){
console.log("click here to enter")
} else if (email === "keiwiscky@gmail.com" && password === 'GODACE12'){
    console.log("you're eligible")
} 
else{
    console.log("you password is not accessible")
}

let totalFees   = 12000;
switch(totalFees){
    case 120:
          console.log(true);
    break;
    case 1200: 
          console.log(true);
    break;
    case 12001: 
          console.log(true);
    break;
    default: 
          console.log("I can't find")
}
//clickhere
function clickhere(){
    console.log("It's limited")
}
clickhere()
//num1 square
var num1 =0;
function square(){
    console.log(num1 = 4 ** 2)
}
square()
//letyouknow
const letYouKnow = (hidden,sheet,ielts) => {
    console.log(ielts += hidden * sheet)
}
letYouKnow(14,16,8)

//Mugi
let num2;
function Mugi(){
    console.log(num2 = 'SwanHtet' + ' ' + 'Aung')
}
Mugi()

//caculate
var num3 = 0;
function caculate(firstNumber,secondNumber,thirdNumber){
num3 = firstNumber * secondNumber * thirdNumber;
num3 += 15;
num3 /= 2;
console.log(num3)
}
caculate(5,2,2)

//getnumber
function getnumber(number){
    return number
}
var bunch = getnumber(10)
console.log(bunch);

//my function and *new form of function*
const myFunction = (Para1, Para2) =>{
    console.log(Para1 * Para2);
}
myFunction(5,5);


//object 
var somethingCallCool = {
    name: "SwanHtetAung", //key Value
    age: 16,
    location: "Bago",
    gender: "male",
    height:"180cm",
    fun : () => {
        console.log("Hello there,Im from Galactic Snake Society which is a great pj and it has a valuable utility.")
    }
}
somethingCallCool.fun()

var inputValue1 = "SwanHtetAung";
var inputValue2 = "10000";
var propertyName = "donateBy" + inputValue1;
somethingCallCool[propertyName] =  inputValue2;

let carInfo = {
    name:'Daniel',
    bloodType: "A",
    keyBoardType: 'KeyChronK12',
}
somethingCallCool.person = carInfo

var sayName = (icon,famous) => {
console.log(icon ** famous)
}
sayName(6,2 )

var i = 0
if(i>1){
console.log(true)
} else (console.log(false))

//Array
let order = ['Yangon','Myitgyener', 'Mon State','Rha Khine State','Mandalay',
             {brand:"Toyota", price: 5000000000, model: 2016,}]

//push
order.push('Taung Gyi')
console.log(order)
order.push('Inn ley')

const index = order.length -2;
console.log(index)
console.log(order[index])
console.log(order.unshift('London'))
console.log(order.shift())
console.log(order.pop())
console.log(order.splice(4,1))
order.unshift("New York","Paris","IceLand")
order.shift()
order.push("Myanmar","China","India")
order.pop()
console.log(order.indexOf("Myanmar"))
console.log(order.splice(8,3))
var costumers = [
    {name: "SwanHtetAung",email: 'keiwiscky@gmail.com',address:"Bago",price: 50000,},
    {name: "Lin Min OO",email:'wann4664@gmail.com',address: "Belin", price: 1000000,},
    {name:"Willigan",email:"willigan@gmail.com",address:"New York",price: 2000000,},
    {name:"Daniel",email:"daniel@gamil.com",address:'London', price: 6000000,},
]

let sendEmail =(email) =>{
 console.log('Sending email to ',email)
}

for (let i=0;i<costumers.length;i++){
let costumerEmail = costumers[i].email;
sendEmail(costumerEmail)
}



var note =[
    {voca: "clarify",meaning:" to make someone clear", type:"formal",},
    {voca: "grind",meaning: "to run or be active in somewhere", type:"formal"},
    {voca: "tease",meaning: "to joke on someone", type:"formal"},
    {voca: "distribute",meaning:"to export something important",type: "formal"},
]

let fillMeaning = (mean) => {
    console.log("The answer is", mean)
}
for (let i = 0;i < note.length;i++){
let noteMeaning = note[i].meaning;
fillMeaning(noteMeaning)
}

//for loop in

let billionarie = {
    name: "Zukerback", brand: "Facebook",ph:09767882364,emial:"zukerback@gmail.com",
}
for (let i in billionarie){
    console.log(billionarie[i]);
}