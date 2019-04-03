window.onload = function() {
  let widthUser = document.documentElement.clientWidth;
  let  heightUser = document.documentElement.clientHeight;

  const bg1 = document.querySelector(".bg1");
  const bg2 = document.querySelector(".bg2");
  const bg3 = document.querySelector(".bg3");
  const bg4 = document.querySelector(".bg4");
  const screen_1 = document.querySelector(".screen_1");
  const screen_2 = document.querySelector(".screen_2");
  const screen_3 = document.querySelector(".screen_3");
  const screen_4 = document.querySelector(".screen_4");
  const container = document.querySelector(".container");
  const kolUser = 10;
  const kolUser2 = kolUser /2;
  let kolDiv = null;
  let kolDiv2 = null;
  let screen1H = document.querySelector(".screen_1 .sect1_cont h1");
  let screen2H = document.querySelector(".screen_2 .sect2_cont h1");
  const nameAnimationUserScreen1 = ["divGo", "divGoBack"];
  const nameAnimationUserScreen2 = ["divGoLeft", "divGoBackLeft"];
  const collectScreen = document.querySelectorAll(".screen");
  const arrayScreen = Array.prototype.slice.call(collectScreen, 0);

  let counter = 0;

  window.addEventListener("resize", resizeHeandler);

  function resizeHeandler() {
   let  widthUser = document.documentElement.clientWidth; 
   let heightUser = document.documentElement.clientHeight;
     changeSizeDiv(widthUser, heightUser, kolDiv);
  }

  //ШИРИНА БЛОКА
  function wDivBg(w, k) {
    let width = w / k;
    return width;
  }

  //ВЫСОТА БЛОКА
  function hDivBg(h, k) {
    let height = h / k;
    return height;
  }

  //ВЫЗОВ ФУЕКЦИЙ РАЗМЕРОВ БЛОКА
  let widthDivBg = wDivBg(widthUser, kolUser);
  let heightDivBg = hDivBg(heightUser, kolUser2);

  //СМЕНА РАЗМЕРА БЛОКА В ЗАВИСИМОСТИ ОТ ЭКРАНА
  function changeSizeDiv(w, h, k) {
     for (let i = 0; i < k.length; i++) {
      kolDiv[i].style.width = wDivBg(w, kolUser) + "px";
      kolDiv[i].style.height = hDivBg(h, kolUser2) + "px";
    }
  }

  //ГЕНЕРАЦИЯ БЛОКОВ ПРИ ЗАПУСКЕ
  function generateDivBgFunc(wDiv, hDiv, wUser, hUser) {
    function kolDivFunc() {
      let sD = widthDivBg * heightDivBg;
      let sW = widthUser * heightUser;
      let kol = sW / sD;
      return kol;
    }

    let generateDivBg = function(w, h, el, k) {
      k = kolDivFunc();
      for (let i = 0; i < k; i++) {
        var div = document.createElement("div");
        div.classList.add("bgDiv");
        
        div.style.width = w + "px";
        div.style.height = h + "px";
        el.appendChild(div);
      }
    };
    generateDivBg(widthDivBg, heightDivBg, bg1, kolUser);
    generateDivBg(widthDivBg, heightDivBg, bg2, kolUser);
    generateDivBg(widthDivBg, heightDivBg, bg3, kolUser);
    generateDivBg(widthDivBg, heightDivBg, bg4, kolUser);
  }
  generateDivBgFunc(wDivBg, hDivBg, widthUser, heightUser);

  //ОПРЕДЕЛЕНИЕ КОЛЛИЧЕСТВА div
  kolDiv = document.querySelectorAll(".bg1 div");
  kolDiv2 = document.querySelectorAll(".bg2 div");
  kolDiv3 = document.querySelectorAll(".bg3 div");
  kolDiv4 = document.querySelectorAll(".bg4 div");

  //СОБЫТТИЕ КЛИКА
  let next = document.querySelector(".next");
  let back = document.querySelector(".back");
  next.addEventListener("click", clickHeandler);
  back.addEventListener("click", clickHeandler2);

  function clickHeandler() {
       checkClass(arrayScreen);
       disabledButton(next,1500);
  }

  //ВЕРНУТЬСЯ НАЗАД
  function clickHeandler2() {
      checkClassBack(arrayScreen);
      disabledButton(back,1500);
  }

  let ran = function(){
    return Math.floor(Math.random() * 10)
  }
//disabled clickk
function disabledButton(el,time){
  el.setAttribute("disabled",true);
  setTimeout(()=>{
    el.removeAttribute("disabled");
  },time);
}

  //эффект исчезновения
  function clickEffect(div, nameAnimation) {
    
    let random;
    function interval() {
     for(let i=0; i <div.length; i++){
    
      random = ran();
      div[i].classList.add("divKills");
  if (div[i].classList.contains("divNew")) {
    div[i].classList.remove("divNew");
  }

  setTimeout(()=>{
    div[i].classList.remove("divKills");
  },2000);
    if(div[i].parentNode.classList.contains("o")){
      div[i].style.transform = "scale(0) rotate(180deg)";
   }
      div[i].style.transitionDelay = "0." + random + "s";
     }
 }
   interval()
  }

  //ЭФФЕКТ появления
  function clickEffect2(div, nameAnimation) {
    let random;
    
     function interval() {
 for(let i =0; i <div.length;i++){
   //Удаление дизактивности кнопки


  random = ran();
   div[i].classList.add("divNew")
  if (div[i].classList.contains("divKills")) {
    div[i].classList.remove("divKills"); 
  }
  div[i].style.transitionDelay = "0." + random + "s"; 
//проверка первого скрина
  if(div[i].parentNode.classList.contains("o")){
      div[i].style.transform = "scale(1) rotate(0deg)";
  }
 }
}
   interval();
  }

  //ПОИСК ПО КЛАССАМ ДЛЯ ПЕРКЛЮЧЕНИЯ СКРИНОВ
  function checkClass(arr) {
    if (!arr[3].classList.contains("active")) {
      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("active")) {
           let endAnimation = childSearch(arr[i],clickEffect); 
           index = i;
             arr[i].classList.remove("active");
              arr[i].classList.add("shadow");
              setTimeout(()=>{
                childSearchOther(arr[index + 1],clickEffect2);
              },500)
          }
      }
      arr[index + 1].classList.add("active");
      arr[index + 1].classList.remove("shadow");
    } 
    else {
      next.setAttribute("disabled", true);
    }
  }

  function checkClassBack(arr) {
    if (!arr[0].classList.contains("active")) {
      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("active")) {
           let endAnimation = childSearch(arr[i],clickEffect);  
            index = i;
            arr[i].classList.remove("active");
            arr[i].classList.add("shadow");
            childSearchOther(arr[index - 1],clickEffect2);
         }
      }
      arr[index - 1].classList.add("active");
      arr[index - 1].classList.remove("shadow");
    } else {
      back.setAttribute("disabled", true);
     
    }
  }
//ПОИСК НУЖНЫХ DIV ПРИ ЛВИЖЕНИИ ВПЕРЕД
  function childSearch(el, func) {
    let child = el.childNodes;
    let bg = child[1];
    let divBg = bg.childNodes;
    func(divBg, "animationDIV");
    return child;
  }

  function childSearchOther(el, func) {
    let child = el.childNodes;
    let bg = child[1];
    let divBg = bg.childNodes; 
    func(divBg, "divGoLeftAn");
    return child;
  }


 











}; //ENDloader
