var Arr = [];
var len = Arr.length;



generateArray(50);
randomArray();
printArray(Arr);



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
        // draw the array;
        return Arr;
  }

  function swap (arr , i , j ){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  }

    function printArray (arr){
      for (var i = 0 ;i < arr.length ; i++){
        console.log(arr[i]);
      }
    }

