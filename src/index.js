module.exports = function reverse (n) {
    let array = String(Math.abs(n)).split("");
  
    let str =  array.reverse().join("");
   return parseInt(str)
 }
