module.exports = function reverse (n) {
  
  
  if (n > 0) {

    return n.toString().split('').reverse().join('');
  }
  else {
    let m = Math.abs(n)
    return m.toString().split('').reverse().join('');
  }
  
}
