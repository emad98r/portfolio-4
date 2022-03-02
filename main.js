
// connect every section by its button ------

// list of buttons-----------
let homeBtn=document.querySelector("#homeBtn"),
aboutBtn=document.querySelector("#aboutBtn"),
portfolioBtn=document.querySelector("#portfolioBtn"),
contactBtn=document.querySelector("#contactBtn"),
serviceBtn=document.querySelector("#serviceBtn");

// list of sections -----------
let firstSection=document.querySelector(".first-section"),
section2=document.querySelector(".section-2"),
portfolio=document.querySelector(".portfolio"),
contact=document.querySelector(".contact"),
services=document.querySelector(".services");

let lists=document.querySelectorAll(".list a");

let mainColorDark="#00c6cf"

let arr=[firstSection,section2,portfolio,contact,services];

for(let i=0;i<lists.length;i++){
  lists[i].addEventListener("click",(ele)=>{
lists.forEach(e=>{
  e.classList.remove("active-btn")
})
ele.currentTarget.classList.add("active-btn")
  });
}


lists[0].addEventListener("click",(ele)=>{
  arr.forEach(e=>{
    e.style.display="none"
  })
arr[0].style.display='flex'
})
lists[1].addEventListener("click",(ele)=>{
  arr.forEach(e=>{
    e.style.display="none"
  })
  arr[1].style.display='block'
})
lists[2].addEventListener("click",(ele)=>{
  arr.forEach(e=>{
    e.style.display="none"
  })
arr[2].style.display='flex'
})
lists[3].addEventListener("click",(ele)=>{
  arr.forEach(e=>{
    e.style.display="none"
  })
arr[3].style.display='flex'
})
lists[4].addEventListener("click",(ele)=>{
  arr.forEach(e=>{
    e.style.display="none"
  })
arr[4].style.display='flex'
})



// ++++++++++++++++++++++++++++++++++++++++++++++++

let portfolio_li=document.querySelectorAll(".portfolio ul li")

for(let i=0; i<portfolio_li.length; i++){
  portfolio_li[i].addEventListener("click",(ele)=>{
    portfolio_li.forEach(e=>{
      e.classList.remove("active-li")
    });
    ele.currentTarget.classList.add("active-li")
  })
}

// +++++++++++++++++++++++++++
let projects=document.querySelectorAll(".projects .project");
let categoryListBtns=document.querySelectorAll(".portfolio ul li");

categoryListBtns[0].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='block'
})
})
categoryListBtns[1].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_portfolio").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[2].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_food").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[3].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_shopping").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[4].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_movies").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[5].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_technology").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[6].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_traveling").forEach((e)=>{
  e.style.display="block"
})
})
categoryListBtns[7].addEventListener("click",()=>{
projects.forEach((e)=>{
e.style.display='none'
})
document.querySelectorAll("#Select_services").forEach((e)=>{
  e.style.display="block"
})
})

// #################################################
// light mode -------------

function lightModeFun(){
  let home=document.querySelector(".first-section");
  let matchX=window.matchMedia('(max-width:767px)');
  let matchX2=window.matchMedia('(min-width:767px) and (max-width:920px)');
  if(matchX.matches){
    home.style.removeProperty("background-image")

  }else if(matchX2.matches){
    home.style.removeProperty("background-image")
  }else{
      home.style.cssText=`background-image: url("../../imgs/section-1-light-bg.svg");`;
    }

  let lightBG="#fff";
  let mainColor="#72b626";
  let textColor="#666";
  let grayColor="#f2f2f2";
  let myPic=document.querySelector("#myPic")
  let arrNo1=[section2,portfolio,contact,services];
  


  lists.forEach(e=>{
    e.addEventListener("mouseover",()=>{
      let homeBtnHover_B=window.getComputedStyle(e,":before");
      e.style.setProperty("--listLight",mainColor)
    })
    
  })
  
  document.querySelector(".active-btn").classList.remove("active-btn")
  
  let butSec_A=document.querySelectorAll(".list a");
    butSec_A.forEach(e=>{
      e.addEventListener("mouseover",()=>{
        let homeBtnHover_A=window.getComputedStyle(e,":hover");
        e.style.setProperty("--hoverLightBtn",mainColor)
      })
    })

  // -----------home 
  myPic.style.backgroundColor="white"
  document.body.style.backgroundColor=lightBG;
  arrNo1.forEach((e)=>{
    e.style.cssText=`background-color:${lightBG}`
    document.querySelectorAll(".first-section h1").forEach((e)=>{
      e.style.cssText=`color:${mainColor}`
    })
  })
  document.querySelector(".first-section h1:nth-of-type(2)").style.cssText=`color:${textColor}`
  document.querySelectorAll("p").forEach((e)=>{
    e.style.cssText=`color:${textColor}`
  })

  // ----------- section-2  about me
  document.querySelectorAll(".section-2 h1").forEach((e)=>{
    e.style.cssText=`color:${textColor};`
  })
  document.querySelectorAll(".section-2 span").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  document.querySelectorAll(".section-2 h2").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  document.querySelectorAll(".section-2 button a").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li span").forEach((e)=>{
    e.style.cssText=`color:black;`
  })
  document.querySelectorAll(".small-bar").forEach((e)=>{
    e.style.cssText=`border-bottom: 1em solid ${mainColor};
    border-top: 1em solid transparent;
    border-left: 1em solid ${mainColor};
    border-right: 1em solid ${mainColor};`
  })
  document.querySelectorAll(".skill span").forEach((e)=>{
    e.style.cssText=`background-color:${lightBG};color:${mainColor};`
  })
  document.querySelectorAll(".section-2 img").forEach((e)=>{
    e.style.cssText=`background-color:${mainColor};`
  })
  document.querySelectorAll(".big-bar").forEach((e)=>{
    e.style.cssText=`background-color:${grayColor};`
  })
  document.querySelectorAll(".section-2 .info > span").forEach((e)=>{
    e.style.cssText=`background-color:${grayColor}; color:black;`
  })
// ------------------- portfolio



let prof_il =document.querySelectorAll(".portfolio ul li");prof_il.forEach((e)=>{
  e.style.cssText=`color:${textColor};`
  e.addEventListener("mouseover",()=>{
    e.style.cssText=`color:${lightBG};background-color:${mainColor}`
  })
  e.addEventListener("mouseout",()=>{
    e.style.cssText=`color:${textColor};`
  })
})

let active_li=document.querySelector(".active-li");
let activeLiLight=window.getComputedStyle(active_li,":hover");
active_li.style.setProperty('--activeLiLight',mainColor)


//-------------- contact 

document.querySelector("#address").src='icons/address-light.svg'
document.querySelector("#email").src='icons/email-light.svg'
document.querySelector("#call").src='icons/call-light.svg'

document.querySelectorAll(".s-m a img").forEach((e)=>{
  e.style.cssText=`background-color:${grayColor};`
})
document.querySelectorAll("form input").forEach((e)=>{
  e.style.cssText=`color:black;background-color:${grayColor};`
})
document.querySelectorAll("form textarea").forEach((e)=>{
  e.style.cssText=`color:black;background-color:${grayColor};`
})

let contactS_M =document.querySelectorAll(".info .s-m a img")
contactS_M.forEach((e)=>{
  let contactS_M_hover=window.getComputedStyle(e,":hover")
  e.style.setProperty("--smHover",mainColor)
})
// ------------- service

document.querySelectorAll(".service .info").forEach((e)=>{
  e.style.cssText=`background-color:${grayColor};border-top: 5px solid ${mainColor}; z-index:2;`
})
document.querySelectorAll(".service .info h1").forEach((e)=>{
  e.style.cssText=`color:${mainColor};`
})
document.querySelectorAll(".service img").forEach((e)=>{
  e.style.cssText=`z-index:1;`
})
  // ------------------ gobble 
  document.querySelectorAll(".title").forEach((e)=>{
    e.classList.add("light-title")

  })
  document.querySelectorAll(".title span").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })

  document.querySelectorAll("h5").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  document.querySelectorAll("h3").forEach((e)=>{
    e.style.cssText=`color:${mainColor};`
  })
  
  // --------------------- 
  document.querySelectorAll("h4").forEach((e)=>{
    e.style.cssText=`color:${textColor};`
  })
  // --------------------
  document.querySelectorAll("button").forEach((e)=>{
    e.style.cssText=`color:${textColor};border:1px solid ${mainColor};z-index:1`
  })
  // -------------------------
  document.querySelectorAll("button img").forEach((e)=>{
    e.style.cssText=`background-color:${mainColor};`
  })
  // ---------------------
  let btnHover= document.querySelectorAll("button");
btnHover.forEach((e)=>{
  
  e.addEventListener("mouseover",()=>{
    let test = window.getComputedStyle(e,":after");
    document.querySelector("button a").style.cssText=`z-index:2;color:${lightBG}`
    document.querySelector("button").style.cssText=`color:${lightBG};border:1px solid ${mainColor};`
    e.style.setProperty('--darkColor', mainColor)
  })
  e.addEventListener("mouseout",()=>{
    let test = window.getComputedStyle(e,":after");
    document.querySelector("button a").style.cssText=`z-index:2;color:${textColor}`
    document.querySelector("button").style.cssText=`z-index:2;color:${textColor};border:1px solid ${mainColor};`
    e.style.setProperty('--darkColor', mainColor)
  })

})
}

// ----------------------
let lightMode=document.querySelector("#lightMode");
let darkMode=document.querySelector("#darkMode");
let lightOn=false;
lightMode.addEventListener("click",()=>{
    lightMode.style.display="none"
    darkMode.style.display="block"
    if(lightOn!=true){
      lightModeFun();
      lightOn=true;
    }
})
darkMode.addEventListener("click",()=>{
    lightMode.style.display="block"
    darkMode.style.display="none"
window.location.reload();
})


// ========================
// more about me button--

document.querySelector("#homeBtnClicked").addEventListener("click",()=>{
  window.open("./about-me.html",'_blank', 'location=yes,height=570,width=820,scrollbars=yes,status=yes,top=300,left=0')
})

