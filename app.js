let Arr = [];
let len = Arr.length;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const range = document.getElementById("range");
const showlen = document.getElementById("array-size");

showlen.innerHTML = range.value;

generateArray(50);
randomArray();
drawArray(Arr);



  function generateArray(size){
    Arr = [];
    for (let i = 1 ; i <= size ; i++){
      Arr.push(i);
    }
    len = Arr.length;
    return Arr;
  }

  function randomArray(){
      let index =len , random;
    
        while(index !== 0){
            random = Math.floor(Math.random() * index);
            index -= 1;

            swap(Arr,index,random);
        }
        drawArray(Arr);
        return Arr;
  }

  function swap (arr, i , j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  }

  function drawArray(arr, idx){
    let x = 0;
    const wid = canvas.width/ len ;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0 ; i < len ; i++){
        ctx.beginPath();
        if(i===idx ){
          ctx.fillStyle = "#21209c";
        }else{
          ctx.fillStyle = "#424242";
        }
        ctx.fillRect (x, (canvas.height) - arr[i] * (wid/3), Math.floor(wid) -2 , (canvas.height));
        ctx.closePath();
        x+= wid;
      }
  }
 
  function worstCase(){
    let tmp = len;
    for (let i = 0 ; i < len ; i++){
      Arr[i] = tmp--;
    }
    drawArray(Arr);
  }

  function sleep(ms){
		return new Promise(resolve =>setTimeout(resolve,ms));	
  }
  

    async function selectionSort (){
    for (let i = 0 ; i < len ; i++){
        let min = i;
       await drawArray(Arr , min);
        for (let j = i+1 ; j < len ;  j++){
          if (Arr[j] < Arr[min]){
            min = j;
           await sleep(500);
           await drawArray(Arr , min);
        }
      }
       await swap(Arr, min , i);
       await drawArray(Arr,min);
       await sleep(500);
    }
    drawArray(Arr);
  }

   async function bubbleSort (){
    for (let i = 0 ; i < len ; i++){
      for (let j = 0 ; j < len - i - 1 ; j++){
         await drawArray(Arr , j);  
        if (Arr[j] > Arr[j+1]){         
            swap(Arr, j, j+1);
           await drawArray(Arr , j);
           await sleep(200);
      }
    }
  }
  drawArray(Arr);
}


range.oninput = function(){
  generateArray(range.value);
  showlen.innerHTML = range.value;
  randomArray();
  drawArray(Arr);
}
  
