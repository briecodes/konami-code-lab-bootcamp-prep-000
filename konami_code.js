const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let i = 0;
  window.addEventListener('keydown', function(e){
  const key = parseInt(e.detail);
  console.log(`Key pressed: ${key}`);
  if (key === code[i]){
    i++;
    if(i === code.length){
      window.alert("Congrats!");
      i = 0;
    }
  }else{
    console.log("Nice try, buddy.");
    i = 0;
  }
 });
}