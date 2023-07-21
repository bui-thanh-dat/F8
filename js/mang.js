var languages = [ 'JavaScripts ', ' Java ' , ' C ', ' Ruby '] ;





// 1 . to String 
console.log(languages.toString()) ; // thành chuỗi String 

// 2 . join 
console.log(languages.join(' - ')) // biến 1 mảng thành chuỗi có thêm kí tự 

// 3. pop 
console.log(languages.pop()) // xóa phần tử cuối mảng và trả về giá trị đã xóa 
console.log(languages)
  
// 4 . push 
console.log(languages.push('Dart')) ; // thêm 1 phần tử ở cuối mảng 
console.log(languages)

// 5. push 
console.log(languages.shift()) // ngược lại với Pop 
console.log(languages) 

// 6. unshift 
console.log(languages.unshift('Pascal','Python')) // ngược lại với push 
console.log(languages) 

// 7.Splicing 
languages.splice(1 , 0 , 'B') // vị trí bắt đầu , xóa kí tự , chèn kí tự 
console.log(languages)  

// 8.concat 
var languages2 = [ 'PHP' , ' D ' ]
console.log(languages.concat(languages2))

// 9. slicing 

console.log(languages.slice( 1 , 3 )) // cắt số phần tử chỉ định 