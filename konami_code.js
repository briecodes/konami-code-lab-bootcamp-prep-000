const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let i = 0;
  document.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);
  console.log(key);
  if (key === code[i]){
    i++;
    console.log(`i: ${i}; code length: ${code.length}`);
    if(i === code.length){
      console.log("congrats???");
      alert("Congrats!");
      i = 0;
    }
  }else{
    i = 0;
  }
});
}