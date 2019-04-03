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



  func();
})(onloadDoc);

function onloadDoc() {
  document.body.onload = function() {
    //ЛОАДЕР

     setTimeout(function() {
      let load = document.querySelector(".load");
      let kv = document.querySelector(".kv");
      let h = document.querySelector(".load h2");
      load.classList.add("closeLoad");
      kv.classList.add("kvClose");
      h.classList.add("closeH");
    }, 1000); 

    let primer = document.querySelector(".primer");
    let h = document.querySelector("h3");
    let mainPos = document.querySelector(":root");
    let hi = document.querySelector(".hi");
    let sect1_cont = document.querySelector(".sect1_cont");

    primer.addEventListener("mousemove", moveMouse);

    function moveMouse(e) {
      let x = e.clientX;
      let y = e.clientY;
      let funcPreobr = numbProc(x, y);
      let a = Math.round(funcPreobr[0]);
      let b = Math.round(funcPreobr[1]);
      let comparX = comparisonX(a);
      let comparY = comparisonY(b);
      
      /*    h.innerHTML = a + " , " + b;  */
      mainPos.style.setProperty("--main-posX", comparX + "%");
      mainPos.style.setProperty("--main-posY", comparY + "%");
    }
    //ПРЕВРД ПИКСЕЛЕЙ В ПРОЦЕНТЫ
    function numbProc(x, y) {
      let xP = (x * 100) / window.innerWidth;
      let yP = (y * 100) / window.innerHeight;
      let arr = [xP, yP];
      return arr;
    }

    //ЗОНЫ РЕАГИРОВАНИЯ НА ЭКРАНЕ
    function comparisonX(x) {
      let result = 0;
      if (x > 0 && x <= 25) {
        return (result = 20);
      }
      if (x > 25 && x <= 50) {
        return (result = 45);
      }
      if (x > 50 && x <= 75) {
        return (result = 70);
      }
      if (x >= 75) {
        return (result = 85);
      }
    }

    function comparisonY(x) {
      let result = 0;

      if (x > 0 && x <= 25) {
        return (result = 20);
      }
      if (x > 25 && x <= 50) {
        return (result = 45);
      }
      if (x > 50 && x <= 75) {
        return (result = 70);
      }
      if (x > 75) {
        return (result = 80);
      }
    }


    //Нажатие на ссылку

    let bg = document.querySelector(".Bg");
    let myWorks = document.querySelector(".myWorks");
    let linkMyWorks = document.querySelector(".linkMyWorks");
    let linkMyWorksMobile = document.querySelector(".linkMyWorksMobile");
    let linkMyStory = document.querySelector(".linkMyStory");
    let myStory = document.querySelector(".myStory");
    let linkMyStoryMobile = document.querySelector(".linkMyStoryMobile");
    

    function clickLink(el) {
      el.classList.add("bgShak");
      setTimeout(function() {
        el.classList.remove("bgShak");
      }, 400);
    }

    //ЭФФЕКТ ПАДЕНИЯ ТЕКСТА
    let effetctText = function() {
      let count = 0;
      cicle(contText(hi), rotateEffect);

      function contText(el){
        let hiText = el.innerHTML;
        return hiText;
      }

//Создаем спан в h
      function generateSpan(cont) {
        count++;
        let sp = document.createElement("span");
        sp.innerHTML = cont;
        sp.classList.add("symb");
        sp.classList.add("symb" + count);
        /*  sect1_cont.insertBefore(hi, sect1_cont.firstChild); */
        hi.appendChild(sp);
      }

//Основной цикл создающий и эффекты
      function cicle(cont, rotat) {
        let contTextResult = String(cont);
        hi.innerHTML = " ";
        let contTextResultLenght = contTextResult.length;
        for (let i = 0; i < contTextResultLenght; i++) {
          generateSpan(contTextResult[i]);
        }
        let spanH = document.querySelectorAll(".hi span");
        setTimeout(function() {
          for (let i = 0; i < contTextResultLenght; i++) {
              goDownEffect(spanH[i],3000);
                rotat(spanH[i]); 
          }
        }, 0);
        goDownEffect(myStory,1000);
        goDownEffect(myWorks,1000);
      }

      function rotateEffect(el) {
        count++;
       
        if (count%2 == 0) {
          let random = Math.floor(Math.random() * 30);
          el.style.transform = "rotate(" + random + "deg)";
        } else {
          let random = Math.floor(Math.random() * -30);
          el.style.transform = "rotate(" + random + "deg)";
         
        }
      }

      function goDownEffect(el,px) {
        let random = function(min, max) {
          var rand = min + Math.random() * (max + 1 - min);
          rand = Math.floor(rand);
          return rand;
        };

        setTimeout(function() {
          el.style.transform = "translateX(" + px + "px)" + " " + "rotate(-180deg)";
          el.style.opacity = "0";
        }, random(400, 1500));
      }
    }

    //MYSTORY
    function myStoryFunction(){
      let text = "Меня зовут Артем, я веб-разработчик, мне нравится создавать. Мои принципы по жизни таковы что всё должно быть сделано со смыслом и эмоцией, тогда это имеет право существовать. И я с удовольствием создаю дизайны сайтов и пишу инструкции, для наших электроных друзей."
        function clearH(el){
          el.innerHTML = "";
          console.log("hi clear");
          return el;
        }
        clearH(hi);
        cicleMyStory(textMystoty,);

        function textMystoty(el,cont){
          el.innerHTML = cont;
          return el.innerHTML;
        }

        //Создаем спан в h
      function generateSpanMyStory(cont) {
        /* count++; */
        let sp = document.createElement("span");
        sp.innerHTML = cont;
        sp.classList.add("symb");
       /*  sp.classList.add("symb" + count); */
        /*  sect1_cont.insertBefore(hi, sect1_cont.firstChild); */
        hi.appendChild(sp);
      }

        //Основной цикл создающий и эффекты
      function cicleMyStory(cont, rotat) {
        let contTextResult = String(cont(hi,text));
        hi.innerHTML = " ";
        let contTextResultLenght = contTextResult.length;
        for (let i = 0; i < contTextResultLenght; i++) {
          generateSpanMyStory(contTextResult[i]);
        }
        let spanH = document.querySelectorAll(".hi span");
      /*   setTimeout(function() {
          for (let i = 0; i < contTextResultLenght; i++) {
              goDownEffect(spanH[i],3000);
                rotat(spanH[i]); 
          }
        }, 0); */
    /*     goDownEffect(myStory,1000);
        goDownEffect(myWorks,1000);
     */
      }





    //CLOSE MYSTORY  
    }
    
  linkMyWorks.addEventListener("click", function() {
    clickLink(bg);
    effetctText();
    setTimeout(function(){
      myStoryFunction();
    },2000);
   
  });
  linkMyWorksMobile.onclick = function() {
    clickLink(bg);
    effetctText();
    setTimeout(function(){
      myStoryFunction();
    },2000);
  };
  
  linkMyStoryMobile.onclick = function() {
    clickLink(bg);
    effetctText();
    setTimeout(function(){
      myStoryFunction();
    },2000);
  };
  
  linkMyStory.addEventListener("click", function() {
    clickLink(bg);
    effetctText();
    setTimeout(function(){
      myStoryFunction();
    },2000);
    
  });























  };
  
}




