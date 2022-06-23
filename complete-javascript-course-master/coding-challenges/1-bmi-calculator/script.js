// BMI = mass / height ** 2 = mass / (height * height) 
//mass in kg, height in meter

const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
let markBMI1 = markMass1 / markHeight1 ** 2;
console.log(markBMI1);
let johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log(johnBMI1);

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
let markBMI2 = markMass2 / markHeight2 ** 2;
console.log(markBMI2);
let johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(johnBMI2);

var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI1);
console.log(markHigherBMI2);