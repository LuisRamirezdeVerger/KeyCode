/* In this example, we use a cross-browser solution, because the keyCode property does not work on the onkeypress event in Firefox. However, the which property does.

Explanation of the first line in the function below: if the browser supports event.which, then use event.which, otherwise use event.keyCode */

// function myFunction(event) {
//   let x = event.which || event.keyCode;
//   document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
// }

// window.addEventListener("keydown", function(event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("output").appendChild(p);
//   }, true);

  window.addEventListener("keydown", function(e){
      const p = this.document.createElement("p");
      p.textContent = `KeyboardEvent: key='${e.key}' | code = '${e.code}'`;
      document.getElementById("output").appendChild(p);
  }, true);