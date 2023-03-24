// function name(){
// let foo = "Foo"
// let foo ='noe'
// var bar = "Bar"
// var bar ='mo'
// }

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

const getUser = () => {
  setTimeout(() => {
    return { name: "Max" };
  }, 0);
};
const user = getUser(); 

//question two

sayHi();
function sayHi() {
  console.log("Hi there");
}
sayHi2();
var sayHi2 = () => {
  console.log("Hi");
};
