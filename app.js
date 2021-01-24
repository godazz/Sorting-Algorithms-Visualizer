var slider = document.getElementById("range");
var output = document.getElementById("array-size");
output.innerHTML = slider.value;    

slider.oninput = function() {
    output.innerHTML = this.value;
  }