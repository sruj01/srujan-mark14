var initialPrice = document.querySelector("#initial-price");
var stockQty = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calculate-btn");
var profitOutput = document.querySelector("#profit-output");
var lossOutput = document.querySelector("#loss-output");
var squareOutput = document.querySelector("#square-output");
var errorOutput = document.querySelector("#error-output")

profitOutput.style.display = "none";
lossOutput.style.display = "none";
squareOutput.style.display = "none";
errorOutput.style.display = "none";


function calculateProfitOrLoss(initial, qty, current){
  if(initialPrice.value < 0 || stockQty.value < 0 || currentPrice.value < 0){
    errorOutput.style.display = "block";
    profitOutput.style.display = "none";
    lossOutput.style.display = "none";
    squareOutput.style.display = "none";
    errorOutput.innerText = "Negative values are not accepted";
  }
  else if(initialPrice.value && stockQty.value && currentPrice.value){
    if(current > initial){
      profitOutput.style.display = "block";
      lossOutput.style.display = "none";
      squareOutput.style.display = "none";
      errorOutput.style.display = "none";
      var profit = (current - initial)*qty;
      var profitPercent = ((current-initial)/initial)*100;
      profitPercent = Math.round(profitPercent*10)/10;
      profitOutput.innerText = "Hurray! You made money.\n Total Profit: "+profit+"\n Profit Percentage: "+profitPercent+"%";
    }
    else if(initial > current){
      lossOutput.style.display = "block";
      profitOutput.style.display = "none";
      squareOutput.style.display = "none";
      errorOutput.style.display = "none";
      var loss = (initial - current)*qty;
      var lossPercent = ((current-initial)/initial)*100;
      lossPercent = Math.round(lossPercent*10)/10;
      lossOutput.innerText = "Bad News, you lost money.\n Total Loss: "+loss+"\n Loss Percentage: "+lossPercent+"%";
    }
    else{
      squareOutput.style.display = "block";
      profitOutput.style.display = "none";
      lossOutput.style.display = "none";
      errorOutput.style.display = "none";
      squareOutput.innerText = "You didn't make any money, but you also didn't lose any. Relax."
    }
  }
  else{
    errorOutput.style.display = "block";
    profitOutput.style.display = "none";
    lossOutput.style.display = "none";
    squareOutput.style.display = "none";
    errorOutput.innerText = "Fill all the fields";
  }
}

calculateBtn.addEventListener("click",function clickHandler(){
  var initial = Number(initialPrice.value);
  var qty = Number(stockQty.value);
  var current = Number(currentPrice.value);
  calculateProfitOrLoss(initial, qty, current);
});
