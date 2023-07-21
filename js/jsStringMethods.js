var myString = " Hoc JS tai F8 JS ! JS      " ;

// 1.length 
console.log(myString.length) 

// 2. Find index 
console.log(myString.indexOf('JS', 8 )) 
console.log(myString.lastIndexOf('JS' )) 

// 3 . Cut String 

console.log(myString.slice(4 , 15 )) // cắt từ vt thứ 4- 15 
console.log(myString.slice(4 )) // cắt từ vị trí thứ 4 đến hết 

// 4 . Replace 
console.log(myString.replace('JS','JavaScript'))
console.log(myString.replace(/JS/g,'JavaScript')) // thay doi tat ca

// 5. Convert to upper Case 
console.log(myString.toUpperCase()) ;

// 6 . convert to lower Case 
console.log(myString.toLowerCase()) 

// 7 . Trim 
console.log(myString.trim())

// 8. Split 
var languages = 'JavaScript , PHP , Ruby ' ;

console.log (languages.split(', ')) // dựa vào 1 điểm chung rồi táhc từng phần tử 


// 9 . Get a character by index 
const myString2 = " Thanh Dat " ;

console.log(myString2.charAt(5))
console.log(myString2[4])