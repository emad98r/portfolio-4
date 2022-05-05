window.addEventListener("load", darkModeFun)


// more about me button--
document.querySelector("#homeBtnClicked").addEventListener("click", () => {
  aboutMe.scrollIntoView();
})

// ==================================================
// dark mode and light mode button
let lightMode = document.querySelector("#lightMode");
let darkMode = document.querySelector("#darkMode");



// list buttons and sections --------------

// list of buttons-----------
let homeBtn = document.querySelector("#homeBtn"),
  aboutBtn = document.querySelector("#aboutBtn"),
  portfolioBtn = document.querySelector("#portfolioBtn"),
  contactBtn = document.querySelector("#contactBtn"),
  serviceBtn = document.querySelector("#serviceBtn");

// list of sections -----------

let firstSection = document.querySelector(".first-section"),
  aboutMe = document.querySelector(".section-2"),
  portfolio = document.querySelector(".portfolio"),
  contact = document.querySelector(".contact"),
  services = document.querySelector(".services");

let lists = document.querySelectorAll(".list a");

let arr = [firstSection, aboutMe, portfolio, contact, services];

homeBtn.addEventListener("click", () => {
  firstSection.scrollIntoView();
})

aboutBtn.addEventListener("click", () => {
  aboutMe.scrollIntoView();
})

portfolioBtn.addEventListener("click", () => {
  portfolio.scrollIntoView();
})

contactBtn.addEventListener("click", () => {
  contact.scrollIntoView();
})

serviceBtn.addEventListener("click", () => {
  services.scrollIntoView();
})




// make the first section display flex
window.onload = arr[0].style.display = "flex";

// add and remove active class to list buttons -------
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", (ele) => {
    lists.forEach(e => {
      e.classList.remove("active-btn")
    })
    ele.currentTarget.classList.add("active-btn")
  });
}


// ----- add and remove the active-li class 
let prof_list = document.querySelectorAll(".portfolio ul li")
for (let i = 0; i < prof_list.length; i++) {
  prof_list[i].addEventListener("click", (ele) => {
    prof_list.forEach(e => {
      e.classList.remove("active-li")
    });
    ele.currentTarget.classList.add("active-li")
  })
}


// =======================================

// ----------------- light mode --------------

lightMode.addEventListener("click", () => {
  let lightBG = "#fff";
  let mainColor = "#72b626";
  let textColor = "#666";
  let grayColor = "#f2f2f2";

  lightMode.style.display = "none"
  darkMode.style.display = "block"


  // change the color of the lists button in light mode
  lists.forEach((e) => {
    let hoverLightBtn = window.getComputedStyle(e, ":before")
    e.style.setProperty("--hoverLightBtn", mainColor)
    e.style.setProperty("--listLight", mainColor)
  })



  // change the background color of the whole body 
  document.body.style.backgroundColor = lightBG;

  // ---------- firstSection-----------------
  let myPic = document.querySelector("#myPic")
  let allSections_1 = [aboutMe, portfolio, contact, services]

  myPic.style.cssText = 'background-color:white;'
  firstSection.style.setProperty("background-image", ` url("../../imgs/section-1-light-bg.svg")`)

  // remove the background image if the screen small

  let matchX = window.matchMedia('(max-width:767px)');
  let matchX2 = window.matchMedia('(min-width:767px) and (max-width:920px)');
  if (matchX.matches) {
    firstSection.style.removeProperty("background-image")

  } else if (matchX2.matches) {
    firstSection.style.removeProperty("background-image")
  } else {
    firstSection.style.setProperty("background-image", ` url("../../imgs/section-1-light-bg.svg")`)
  }


  document.querySelector(".first-section h1").style.color = mainColor
  document.querySelector(".first-section h1:nth-of-type(2)").style.color = textColor
  document.querySelector(".first-section p").style.color = textColor
  document.querySelector(".first-section h5").style.color = mainColor
  // --------------------- aboutMe------------------
  document.querySelectorAll(".section-2 h1").forEach((e) => {
    e.style.cssText = `color:${textColor};`
  })
  document.querySelectorAll(".section-2 span").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 h4").forEach((e) => {
    e.style.cssText = `color:${textColor};`
  })
  document.querySelectorAll(".section-2 h2").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li span").forEach((e) => {
    e.style.cssText = `color:black;`
  })
  document.querySelectorAll(".skill span").forEach((e) => {
    e.style.cssText = `background-color:${mainColor}; `
  })
  document.querySelectorAll(".section-2 img").forEach((e) => {
    e.style.cssText = `background-color:${mainColor};`
  })
  document.querySelectorAll(".big-bar").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};`
  })
  document.querySelectorAll(".section-2 .info > span").forEach((e) => {
    e.style.cssText = `background-color:${grayColor}; color:black;`
  })

  document.querySelectorAll(".section-2 button a").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })


  // ------------- portfolio ------------------
  let prof_il = document.querySelectorAll(".portfolio ul li");
  prof_il.forEach((e) => {
    e.style.cssText = `color:${textColor};`
    let prof_li_hover = window.getComputedStyle(e, ":hover");
    e.style.setProperty("color", "gray")
    e.addEventListener("mouseover", () => {
      e.style.cssText = `color:${lightBG};background-color:gray`;
    })
    e.addEventListener("mouseout", () => {
      e.style.cssText = `color:gray;background-color:${lightBG}`;
    })
  })


  // ------ change the hover of the project background to green 
  projects.forEach((e) => {

    let project_hover = window.getComputedStyle(e, ":hover");
    e.style.setProperty("--hoverGreen", mainColor)
  })

  // -------------- contact--------------
  document.querySelector("#address").src = 'icons/address-light.svg'
  document.querySelector("#email").src = 'icons/email-light.svg'
  document.querySelector("#call").src = 'icons/call-light.svg'

  document.querySelectorAll(".s-m a img").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};`
  })
  document.querySelectorAll("form input").forEach((e) => {
    e.style.cssText = `color:black;background-color:${grayColor};`
  })
  document.querySelectorAll("form textarea").forEach((e) => {
    e.style.cssText = `color:black;background-color:${grayColor};`
  })
  document.querySelector(".contact .info h4").style.cssText = `color:${textColor}`

  document.querySelectorAll(".contact p").forEach(e => {
    e.style.cssText = `color:${textColor}`
  })
  document.querySelectorAll(".contact h3").forEach(e => {
    e.style.cssText = `color:${mainColor}`
  })

  let contactS_M = document.querySelectorAll(".info .s-m a img")
  contactS_M.forEach((e) => {
    let contactS_M_hover = window.getComputedStyle(e, ":hover")
    e.style.setProperty("--smHover", mainColor)
  })

  // ------------- service

  document.querySelectorAll(".service .info").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};border-top: 5px solid ${mainColor}; z-index:2;`
  })
  document.querySelectorAll(".service .info h1").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".service img").forEach((e) => {
    e.style.cssText = `z-index:1;`
  })
  document.querySelectorAll(".service p").forEach((e) => {
    e.style.cssText = `color:${textColor}`
  })

  // ------------------ gobble ----------------
  document.querySelectorAll(".title").forEach((e) => {
    e.classList.add("light-title")

  })
  document.querySelectorAll(".title span").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })


  // ---------------------- buttons------
  document.querySelectorAll("button").forEach((e) => {
    e.style.cssText = `color:${textColor};border:1px solid ${mainColor};z-index:1`
  })
  // -------------------------
  document.querySelectorAll("button img").forEach((e) => {
    e.style.cssText = `background-color:${mainColor};`
  })
  // ---------------------
  let btnHover = document.querySelectorAll("button");
  btnHover.forEach((e) => {
    e.addEventListener("mouseover", () => {
      let test = window.getComputedStyle(e, ":after");
      document.querySelector("button a").style.cssText = `z-index:2;color:${lightBG}`

      document.querySelector("button").style.cssText = `color:${lightBG};border:1px solid ${mainColor};`
      e.style.setProperty('--darkColor', mainColor)
    })
    e.addEventListener("mouseout", () => {
      let test = window.getComputedStyle(e, ":after");
      document.querySelector("button a").style.cssText = `z-index:2;color:${textColor}`

    })
  })

})


// =====================================

// ----------- dark mode -------------------

function darkModeFun() {

  let lightBG = "#111111";
  let mainColor = "#00c6cf";
  let textColor = "#ffffff";
  let grayColor = "#252525";

  darkMode.style.display = "none"
  lightMode.style.display = "block"



  // change the color of the lists button in light mode
  lists.forEach((e) => {
    let hoverLightBtn = window.getComputedStyle(e, ":before")
    e.style.setProperty("--hoverLightBtn", mainColor)
    e.style.setProperty("--listLight", mainColor)
  })

  // change the background color of the whole body 
  document.body.style.backgroundColor = lightBG;

  // ---------- firstSection-----------------
  let myPic = document.querySelector("#myPic")
  let allSections_1 = [aboutMe, portfolio, contact, services]

  myPic.style.cssText = 'background-color:black;'
  firstSection.style.setProperty("background-image", `url("../../imgs/1-section-01.svg")`)

  // remove the background image if the screen small
  let matchX = window.matchMedia('(max-width:767px)');
  let matchX2 = window.matchMedia('(min-width:767px) and (max-width:920px)');
  if (matchX.matches) {
    firstSection.style.removeProperty("background-image")

  } else if (matchX2.matches) {
    firstSection.style.removeProperty("background-image")
  } else {
    firstSection.style.setProperty("background-image", `url("../../imgs/1-section-01.svg")`)
  }


  document.querySelector(".first-section h1").style.color = mainColor;
  document.querySelector(".first-section h1:nth-of-type(2)").style.color = textColor;
  document.querySelector(".first-section p").style.color = textColor;
  document.querySelector(".first-section h5").style.color = mainColor;

  // --------------------- aboutMe------------------
  document.querySelectorAll(".section-2 h1").forEach((e) => {
    e.style.cssText = `color:${textColor};`
  })
  document.querySelectorAll(".section-2 span").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 h4").forEach((e) => {
    e.style.cssText = `color:${textColor};`
  })
  document.querySelectorAll(".section-2 h2").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".section-2 li span").forEach((e) => {
    e.style.cssText = `color:white;`
  })
  document.querySelectorAll(".skill span").forEach((e) => {
    e.style.cssText = `background-color:${mainColor};`
  })
  document.querySelectorAll(".section-2 img").forEach((e) => {
    e.style.cssText = `background-color:${mainColor};`
  })
  document.querySelectorAll(".big-bar").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};`
  })
  document.querySelectorAll(".section-2 .info > span").forEach((e) => {
    e.style.cssText = `background-color:${grayColor}; color:white;`
  })

  document.querySelectorAll(".section-2 button a").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })


  // ------------- portfolio ------------------
  let prof_il = document.querySelectorAll(".portfolio ul li");
  prof_il.forEach((e) => {
    e.style.cssText = `color:white;`
    e.addEventListener("mouseover", () => {
      e.style.cssText = `color:${lightBG};background-color:gray`;
    })
    e.addEventListener("mouseout", () => {
      e.style.cssText = `color:white;background-color:${lightBG}`;
    })
  })


  // ------ change the hover of the project background to green 
  projects.forEach((e) => {

    let project_hover = window.getComputedStyle(e, ":hover");
    e.style.setProperty("--hoverGreen", mainColor)
  })



  // -------------- contact--------------
  document.querySelector("#address").src = 'icons/address-dark.svg'
  document.querySelector("#email").src = 'icons/email-dark.svg'
  document.querySelector("#call").src = 'icons/call-dark.svg'

  document.querySelectorAll(".s-m a img").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};`
  })
  document.querySelectorAll("form input").forEach((e) => {
    e.style.cssText = `color:white;background-color:${grayColor};`
  })
  document.querySelectorAll("form textarea").forEach((e) => {
    e.style.cssText = `color:white;background-color:${grayColor};`
  })
  document.querySelector(".contact .info h4").style.cssText = `color:${textColor}`

  document.querySelectorAll(".contact p").forEach(e => {
    e.style.cssText = `color:${textColor}`
  })
  document.querySelectorAll(".contact h3").forEach(e => {
    e.style.cssText = `color:${mainColor}`
  })

  let contactS_M = document.querySelectorAll(".info .s-m a img")
  contactS_M.forEach((e) => {
    let contactS_M_hover = window.getComputedStyle(e, ":hover")
    e.style.setProperty("--smHover", mainColor)
  })


  // ------------- service

  document.querySelectorAll(".service .info").forEach((e) => {
    e.style.cssText = `background-color:${grayColor};border-top: 5px solid ${mainColor}; z-index:2;`
  })
  document.querySelectorAll(".service .info h1").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })
  document.querySelectorAll(".service img").forEach((e) => {
    e.style.cssText = `z-index:1;`
  })
  document.querySelectorAll(".service p").forEach((e) => {
    e.style.cssText = `color:${textColor}`
  })

  // ------------------ gobble ----------------
  document.querySelectorAll(".title").forEach((e) => {
    e.classList.remove("light-title")

  })
  document.querySelectorAll(".title span").forEach((e) => {
    e.style.cssText = `color:${mainColor};`
  })


  // ---------------------- buttons------
  document.querySelectorAll("button").forEach((e) => {
    e.style.cssText = `color:${textColor};border:1px solid ${mainColor};z-index:1`
  })
  // -------------------------
  document.querySelectorAll("button img").forEach((e) => {
    e.style.cssText = `background-color:${mainColor};`
  })
  // ---------------------
  let btnHover = document.querySelectorAll("button");
  btnHover.forEach((e) => {
    e.addEventListener("mouseover", () => {
      let test = window.getComputedStyle(e, ":after");
      document.querySelector("button a").style.cssText = `z-index:2;color:${lightBG}`
      document.querySelector("button").style.cssText = `color:${lightBG};border:1px solid ${mainColor};`
      e.style.setProperty('--darkColor', mainColor)
    })
    e.addEventListener("mouseout", () => {
      let test = window.getComputedStyle(e, ":after");
      document.querySelector("button a").style.cssText = `z-index:2;color:${textColor}`

      document.querySelector("button").style.cssText = `z-index:2;color:${textColor};border:1px solid ${mainColor};`
      e.style.setProperty('--darkColor', mainColor)
    })

  })
}

darkMode.addEventListener("click", darkModeFun)




// +++++++++++++++++++++++++++
// portfolio projects category list 
let projects = document.querySelectorAll(".projects .project");
let categoryListBtns = document.querySelectorAll(".portfolio ul li");

categoryListBtns[0].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'block'
  })
})
categoryListBtns[1].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_portfolio").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[2].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_food").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[3].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_shopping").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[4].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_movies").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[5].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_technology").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[6].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_traveling").forEach((e) => {
    e.style.display = "block"
  })
})
categoryListBtns[7].addEventListener("click", () => {
  projects.forEach((e) => {
    e.style.display = 'none'
  })
  document.querySelectorAll("#Select_services").forEach((e) => {
    e.style.display = "block"
  })
})




// Animation =================================

// left & right sides of about me section ------------------

window.addEventListener("scroll", () => {
  if (window.scrollY >= document.querySelector(".section-2").offsetTop - 500) {
    document.querySelector(".left-side").style.cssText = ` display:flex;`
    document.querySelector(".right-side").style.cssText = ` display:flex;`
  }
})


// ----------------------
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1161) {
    document.querySelectorAll(".skill span").forEach(e => {
      e.style.width = e.dataset.progress;
    })
  }
})


// -----------------
window.addEventListener("scroll", () => {
  if (window.scrollY >= document.querySelector(".exper-education").offsetTop + 200) {
    document.querySelectorAll("#pen").forEach(e => {
      e.style.cssText = `top:0;`
    })
  }
})

// small man Animation -----------------

let hi = document.querySelector(".hi"),
  cancelBtn = document.querySelector("#cancelBtn"),
  scrollDBtn = document.querySelector("#scrollDBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    hi.style.cssText = ` transform: translateX(0);display:block;`
  }
})


cancelBtn.addEventListener("click", () => {
  hi.style.cssText = `display:none;`
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
      hi.style.cssText = `display:none; transform: translateX(0);`
    }
  })
})
// ---------------------

window.addEventListener("scroll", () => {
  if (window.scrollY >= document.querySelector(".projects").offsetTop - 500) {
    document.querySelectorAll(".project").forEach(e => {
      e.style.cssText = `transform: scale(1);`
    })
    let changeMessage = window.getComputedStyle(hi, ":after");
    hi.style.setProperty('--message', ' "here you are" ')
    scrollDBtn.style.display = "none"
  }
})

