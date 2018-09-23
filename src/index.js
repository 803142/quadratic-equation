module.exports = function solveEquation(equation) {
  // your implementation
  var array = [];
  var a=b=c=D=0;
  var x1=x2=null;
  equation=equation.replace(/\s/g, "");
  array=equation.match(/[^x^]\d+/g);
  a=Number(array[0]);
  b=Number(array[1]);
  c=Number(array[2]);
  D = b * b - 4 * a * c;
  if(D > 0) {
    x1 = Math.round((- b + Math.sqrt(D)) / (2 * a));
    x2 = Math.round((- b - Math.sqrt(D)) / (2 * a));
  }else if(D === 0) {
    x1 = Math.round((- b) / (2 * a));
  }
  if (x1>x2) {return[x2,x1];}
  else {return[x1,x2];};
}
