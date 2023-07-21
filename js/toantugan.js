/* Toán tử gán 
 toán tử              ví dụ                   tương đương
 
 =                    x = y                    
 +=                   x += y                   x = x + y
 -=                   x -= y                   x = x - y 
 *=                   x *= y                   x = x * y 
 /=                   x /= y                   x = x / y 
 **=                  x **= y                  x = x ** y 

*/


var a = 3 ;
var b = 4 ;
var c = 5 ; 
var d = 6 ;
var e = 7 ;


a += 3 ;
b -= 7 ;
c *= 3 ;
d /= 2 ;
e **= 4 ;

console.log("a += 3 : ",a);
console.log("b -= 7 : ",b); 
console.log("c *= 3 : ",c);
console.log("d /= 2 : ",d);
console.log("e **= 4 : ",e);


var name = "Bui Thanh " ;
var last ="Linh"
name += "Dat " ;

console.log(name)
console.log(`Toi la : ${name} Tong ${last}`);
console.log('Toi la : ', name + 'Tong ' + last  )
