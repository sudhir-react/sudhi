/**Operators in JS */

// 1. Assignment Operator
 let a = 15;
 let b = a;
 let c = a = 20;
 console.log(a);
 console.log(b);
 console.log(c);
 
// 2. Arithematic Operators(+, -, *, /, %)
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);


// 3. More Arithematic Operators (++, --, +, -, **)
let i = 5;
//i = i+1;
//i = i+2
//i++;
//i++;
//++i;
console.log(i++);
console.log(i);

let j = +30;
console.log(j);
let k = -40
console.log(k);

let squqre = 5;
console.log(squqre**3);




// 4. Augmented Assignment Operator

// (+=(Addition Assignment), -=(Subtraction Assignment), *=(Multiplication Assignment), /=(Division Assignment), %=(Remainder (Modulo) Assignment), **=(Exponentiation Assignment), &&=(Logical AND Assignment), ||=(Logical OR Assignment), ??=(Nullish Coalescing Assignment))

//(x = x +5) == (x+=5),//(x = x -5) == (x-=5)
x = 5
x += 5;
console.log(x);
x -= 5;
console.log(x);
x *= 5;
console.log(x);
x /= 5;
console.log(x);
