var Arr = [];
var len = Arr.length;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var range = document.getElementById("range");
var showlen = document.getElementById("array-size");

showlen.innerHTML = range.value;

generateArray(50);
randomArray();
drawArray(Arr);



  function generateArray(size){
    Arr = [];
    for (var i = 1 ; i <= size ; i++){
      Arr.push(i);
    }
    len = Arr.length;
    return Arr;
  }

  function randomArray(){
      var index =len , random;
    
        while(index !== 0){
            random = Math.floor(Math.random() * index);
            index -= 1;

            swap(Arr,index,random);
        }
        drawArray(Arr);
        return Arr;
  }

  

  function swap (arr, i , j){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  }

  function drawArray(arr){
    var x = 0;
    var wid = canvas.width/ len ;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0 ; i < len ; i++){
        ctx.beginPath();
        ctx.fillStyle = "#424242";
        ctx.fillRect (x, (canvas.height) - arr[i] * (wid/3), Math.floor(wid) -1 , (canvas.height));
        ctx.closePath();
        x+= wid;
      }
  }


range.oninput = function(){
  generateArray(range.value);
  showlen.innerHTML = range.value;
  randomArray();
  drawArray(Arr);
}

   
