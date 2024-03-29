// task1
// let a;
// a = +window.prompt("yasi daxil edin");
// if( a < 125){
//     if( a>=65){
//         console.log("pensiya dusecek")
//     }
//     else{
//         console.log("hele cavansan")
     
// }    
// }
// else{
//     console.log("olmusen")
// }
// task2
// let a;
// a = +window.prompt("ededi daxil edin");
// if(a%2==0){
//     console.log("cut ededdir")
// }
// else{
//     console.log("tek ededdir")
// }
// task3
// let month;
// month = window.prompt("ayi girin");
// switch (month) {
//     case "dekabr":
//     case "yanvar":
//     case "fevral":
//         console.log("winter");
//         break;
//     case "mart":
//     case "aprel":
//     case "may":
//         console.log("spring");
//         break;
//     case "iyun":
//     case "iyul":
//     case "avqust":
//         console.log("summer");
//     case "iyun":
//     case "iyul":
//     case "avqust":
//         console.log("autumn");
//         break;
//         default:
//           console.log("BU AY YOXDUR")
//           break
// }
// task4
// let a;
// a = +window.prompt("ededi  daxil edin")
// if(a % 3 == 0 && a % 5 == 0){
//     console.log("3 ve 5 e tam bolunur")
// }
// else{
//     console.log("3 ve 5e tam bolunmur")
// }
// task5
// let a = +window.prompt("enter number")
// if(a>0){
//     if(a%2 == 0){
//         console.log("bolundu")
//     }
//     else{
//         console.log(a%2)

//     }
// }
// task6
// let a= +window.prompt("1 ci ededi daxil edin");
// let b= +window.prompt("2 ci ededi daxil edin");
// if(a*b>0){
//     console.log("musbet");
// }
// else{
//     console.log("menfi")
// }
// task7
// let a= +window.prompt("ededi daxil edin");
// if(a>0)
// {
//     if(a>0 && a<100){
//         console.log("1-100 araliqindadir")

//     }
//     else{
//         console.log("1-100 araliqinda deyil")
        
//     }
    
// }
// else{
//     console.log("eded menfidir")
// }
// task8
// let a= +window.prompt("a ededini daxil edin");
// let b= +window.prompt("b ededini daxil edin");
// let c= +window.prompt("c ededini daxil edin");
// if(a>b && a>c){
//     console.log("a en boyukdur")

// }
// else if(b>a && b>c){
//     console.log(" b en boyukdur")
// }
// else{
//     console.log("c en boyukdur")
// }

// task10
// let a= +window.prompt("ededi daxil edin");
// if(a>=90){
//     console.log("a");

// }
// else if(a>=80){
//     console.log("b");
// }
// else if(a>=70){
//     console.log("c");
// }
// else if(a>=60){
//     console.log("d");
// }
// else if(a>=50){
//     console.log("e");
// }
// else{
//     console.log("f")
// }

// task1
// function printFullName(firstName, lastName){
//     return `I am ${firstName} ${lastName}`;
// }
// console.log(printFullName("jhon","doe"));


// task2
// function square(number){
//     return number*number
// }
// console.log(square(5));//25


// task3
// function func1(number1,number2){
//   return number1*number2
// }
// function func1(number1,number2){
//     return number1/number2
// }
// function func1(number1,number2){
//     return number1+number2
// }
// function func1(number1,number2){
//     return number1-number2
// }
// console.log(func1(12,6))
// console.log(func1(12,4))
// console.log(func1(12,8))
// console.log(func1(12,6))
// task4

// console.log("asdasd");
// function calc(number1,number2,operator){
//     if(operator==="+"){
//       return number1+number2
//     }
//     else if(operator==="*"){
//         return number1+number2
//     }
//     else if(operator==="-"){
//         return number1-number2
//     }
//     else if(operator==="/"){
//     return number1/number2
//     }
//     else{

//       return "bele bir sey yoxdur";
//     }
// }

// console.log(calc(3,5,"+"));
// console.log(calc(3,5,"*"));
// console.log(calc(3,5,"-"));
// console.log(calc(3,5,"/"));

// task5

// const getSum = (array) => {
//   return array[0] + array[array.length - 1];
// };
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65
//  task6
// const getSum = (array) => {
//     let sum=0;
//     for(let i=0; i<array.length; i++){
//       sum+= array[i]
//     }
//     return sum
// };
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65
// task7

// const getSum = (array) => {
//     let max=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>max){
//             max=array[i]
//         } 
//         else{

//         }

   
// }
// return max 
// }
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65

// task8
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];
//   function filterEmployees(arr){
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].salary >60000){
//             filtered.push(arr[i]);
//         }
//     }
//     return filtered;
//   }
//   console.log(filterEmployees(employees));
// task9
// function  findElement(array, number){
//     let bool = true;
//     for (let i=0; i< array.length; i++){
//         if(array[i] === number){
//             bool = false;
//             break;
//         }
//     }

//     if(bool===true){
//         return `${number} array elementlerinden biri deyil`
//     }
//     else{
//        return `${number} array elementlerinden biridir.`;
// }
//     }
//     // return bool ? `${number} array elementlerinden biri deyil` : `${number} array elementlerinden biridir.`;

// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir
// task10
// function findSpace(text){
//     let count=0
//     for (let i = 0; i < text.length; i++) {
//         if(text[i]===" "){
//             count++
//         }
        
//     }
//     return count
// }
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
//  console.log(findSpace(sampleNews));
// task11












































































































































