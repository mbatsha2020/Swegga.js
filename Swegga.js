function calc(){
  let x = document.getElementById("male_qty").value;
  let y = document.getElementById("female_qty").value;
  console.log(x,y);

  let xtotal = 180.95*x;
  let ytotal = 150.95*y;
  let ztotal = xtotal+ytotal;

  document.getElementById("flabel").innerHTML=ytotal.toFixed(2);
  document.getElementById("mlabel").innerHTML=xtotal.toFixed(2);
  document.getElementById("total").innerHTML=ztotal.toFixed(2);

}