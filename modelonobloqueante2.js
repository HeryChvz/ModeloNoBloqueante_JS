"use strict";

setTimeout(function () {
  console.log("Tarea1");
}, 3000);
setTimeout(function () {
  console.log("Tarea2");
}, 20000);
setTimeout(function () {
  console.log("Tarea3");
}, 10000);
setTimeout(function () {
  console.log("Tarea4");
}, 2000);

console.log("Tarea5");
console.log(process.uptime());
console.log("Fin del programa");
