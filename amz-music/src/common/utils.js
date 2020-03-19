export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      //防止this作用域被修改
      func.apply(this, args)
    }, delay)
  }
}
// let fn = debounce(function test() {
//   console.log(122);
// }, 5000)