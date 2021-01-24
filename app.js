var Arr = [];
var len = Arr.length;

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");


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
    
        while(0!== index){
            random = Math.floor(Math.random() * index);
            index -= 1;

            swap(Arr,index,random);
        }
        drawArray(Arr);
        return Arr;
  }

  function swap (arr , i , j ){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  }

  function drawArray(arr){
    var x = 0;
    var wid = canvas.width / len ;
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      for (var i = 0 ; i < len ; i++){
        ctx.beginPath();
        ctx.fillStyle = "#424242";
        ctx.fillRect (x , (canvas.height) - arr[i] * (wid/2) , wid , (canvas.height));
        ctx.closePath();
        x+= wid;
      }
  }

    function printArray (arr){
      for (var i = 0 ;i < arr.length ; i++){
        console.log(arr[i]);
      }
    }

