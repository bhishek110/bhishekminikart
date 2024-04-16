var productImg = document.getElementById("productImg");
var btn = document.querySelectorAll(".c-btn");

btn[0].onclick = function(){
  productImg.src = '1.webp';

  for(bt of btn){
    bt.classList.remove("active");
  }

  this.classList.add("active");
}
btn[1].onclick = function(){
  productImg.src = '2.webp';
  
  for(bt of btn){
    bt.classList.remove("active");
  }

  this.classList.add("active");
}
btn[2].onclick = function(){
  productImg.src = '3.webp';
  
  for(bt of btn){
    bt.classList.remove("active");
  }

  this.classList.add("active");
}
btn[3].onclick = function(){
  productImg.src = '4.webp';
  
  for(bt of btn){
    bt.classList.remove("active");
  }

  this.classList.add("active");
}
btn[4].onclick = function(){
  productImg.src = '5.webp';
  
  for(bt of btn){
    bt.classList.remove("active");
  }

  this.classList.add("active");
}
btn[5].onclick = function(){
  productImg.src = '6.webp';
  
  for(bt of btn){
    bt.classList.remove("active");
  }
  
  this.classList.add("active");
}