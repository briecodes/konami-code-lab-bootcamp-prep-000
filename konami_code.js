const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0;
  console.log("hello?")
  window.addEventListener('keydown', function(e){
  const key = parseInt(e.detail);
  console.log(key);
  if (key === code[i]){
    i++;
    if(i === code.length){
      alert("Congrats!");
      i = 0;
    }
  }else{
    console.log("Nice try, buddy.");
    i = 0;
  }
 });
}