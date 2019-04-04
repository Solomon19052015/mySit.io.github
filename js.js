(function(func) {
  let h = document.createElement("h2");
 h.innerHTML = "ЗАГРУЗКА";
 let load = document.createElement("div");
 let kv = document.createElement("div");
 document.body.insertBefore(load, document.body.firstChild);
 load.insertBefore(kv, load.firstChild);
 load.insertBefore(h, load.firstChild);
 load.classList.add("load");
 kv.classList.add("kv"); 




})();


window.onload = function() {

  setTimeout(function() {
    let load = document.querySelector(".load");
    let kv = document.querySelector(".kv");
    let h = document.querySelector(".load h2");
    load.classList.add("closeLoad");
    kv.classList.add("kvClose");
    h.classList.add("closeH");
  }, 1500); 

  let widthUser = document.documentElement.clientWidth;
  let  heightUser = document.documentElement.clientHeight;
  const bg1 = document.querySelector(".bg1");
  const bg2 = document.querySelector(".bg2");
  const bg3 = document.querySelector(".bg3");
  const bg4 = document.querySelector(".bg4");
   const container = document.querySelector(".container");
  var kol =  mobWidth(widthUser);
  var kolUser = kol.kolU;
    var kolUser2 = kol.kolUh ;
  const collectScreen = document.querySelectorAll(".screen");
  const arrayScreen = Array.prototype.slice.call(collectScreen, 0);

  let counter = 0;
  //УСТАНОВКА ВЫСОТЫ КОНТАИНЕРА
  function changeHeightContainer(h){
    container.style.height = h + "px";
    for(let i =0; i <arrayScreen.length;i++ ){
      arrayScreen[i].style.height = h + "px";
    }
  
  }
  changeHeightContainer(heightUser);

  //ОПРЕДЕЛЕНИЕ ШИРИНЫ ДЛЯ МОБ ВЕРСИИ
  function mobWidth(w){
    let kolU = null;
let kolUh = kolU;
    if(w < 700 && w > 400){
      kolU = 3;
      kolUh=kolU;
      return {
        kolU,kolUh
      }  
      
    }
    else if(w < 400){
      kolU = 2;
      kolUh=kolU;
      return {
        kolU,kolUh
      }
    }
    else{
      kolU = 6,
      kolUh = kolU/2
      return {
        kolU,kolUh
      };
    }
  }

  window.addEventListener("resize", resizeHeandler);

  function resizeHeandler() {
   let  widthUser = document.documentElement.clientWidth; 
   let heightUser = document.documentElement.clientHeight;
     changeSizeDiv(widthUser, heightUser, allDivBg);
     changeHeightContainer(heightUser);
     mobWidth(widthUser);
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
     for (let i = 0; l = k.length, i < l; i++) {
      k[i].style.width = wDivBg(w, kolUser) + "px";
      k[i].style.height = hDivBg(h, kolUser2) + "px";
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
    let allDivBg = document.querySelectorAll(".bgDiv");
    return allDivBg;
  }
  let allDivBg = generateDivBgFunc(wDivBg, hDivBg, widthUser, heightUser);

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

//Эффект появление контента

function aciveContent(el){
   let child = el.childNodes;
  for(let i = 0; l = child.length, i < l;i++){
     if(child[i].classList){
      if(child[i].classList.contains("cont")){
        if(child[i].classList.contains("sect_contActive"))
           child[i].classList.remove("sect_contActive");
           else
           child[i].classList.add("sect_contActive");
     }
      
    }
  }
}

function addClassCont(el,clas){
  el.classList.add(clas);
}

function removeClassCont(el,clas){
  el.classList.remove(clas);
}

  //эффект исчезновения фона
  function clickEffect(div, nameAnimation) {
    
    let random;
    function interval() {
     for(let i=0; i <div.length; i++){
      random = ran();
      div[i].classList.add("divKills");
      div[i].classList.add("trans");
  if (div[i].classList.contains("divNew")) {
    div[i].classList.remove("divNew");
  }

  setTimeout(()=>{
    div[i].classList.remove("divKills");
    div[i].classList.remove("trans");
    div[i].style.transitionDelay = "0s";
  },2000);
    if(div[i].parentNode.classList.contains("o")){
      div[i].style.transform = "scale(0) rotate(0deg)";
   }
      div[i].style.transitionDelay = "0." + random + "s";
     }
 }
   interval()
  }

  //ЭФФЕКТ появления фона
  function clickEffect2(div, nameAnimation) {
    let random;
    
     function interval() {
 for(let i =0; i <div.length;i++){
   //Удаление дизактивности кнопки
  random = ran();
   div[i].classList.add("divNew")
   div[i].classList.add("trans")
  if (div[i].classList.contains("divKills")) {
    div[i].classList.remove("divKills"); 
  }
  setTimeout(() => {
    div[i].classList.remove("trans");
    div[i].style.transitionDelay = "0s";
      }, 1100);
  div[i].style.transitionDelay = "0." + random + "s"; 
//проверка первого скрина
  if(div[i].parentNode.classList.contains("o")){
    setTimeout(() => {
      div[i].classList.remove("divNew");
        }, 1500);
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
           childSearch(arr[i],clickEffect); 
           aciveContent(arr[i]);
           index = i;
             arr[i].classList.remove("active");
              arr[i].classList.add("shadow");
              setTimeout(()=>{
                childSearchOther(arr[index + 1],clickEffect2);
              },500);

          }
      }
      let nextEl = arr[index+1];
      arr[index + 1].classList.add("active");
      arr[index + 1].classList.remove("shadow");
    
      aciveContent(nextEl);
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
           aciveContent(arr[i]);
            index = i;
            arr[i].classList.remove("active");
            arr[i].classList.add("shadow");
            childSearchOther(arr[index - 1],clickEffect2);
         }
      }
      arr[index - 1].classList.add("active");
      arr[index - 1].classList.remove("shadow");
      aciveContent(arr[index-1]);
    } 
    else{
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


 //БЛОК МОИ РАБОТЫ
 function blockWorks(){
 let work1 = document.querySelector(".w1");
 let work2 = document.querySelector(".w2");
 let work3 = document.querySelector(".w3");
let works = [work1,work2,work3];
let count = 0;

for(let i =0; i < works.length; i++){
  works[i].addEventListener("click",increaseWork );
} 

function increaseWork(e){
  count++;
  let el = e.target.parentNode;
  if(count == 1){
     el.classList.add("worksIncrease");
   
  }
  else{
    el.classList.remove("worksIncrease");
    count=0;
  }
  
}
 }
 blockWorks();










}; //ENDloader
