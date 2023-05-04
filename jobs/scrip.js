humbuerger= document.querySelector(".humburger")
clouse= document.querySelector("#clouse")
nav_menu= document.querySelector(".nav_menu")




humbuerger.addEventListener("click",()=>{
    humbuerger.classList.add("none")
   nav_menu.classList.add("block")
})
clouse.addEventListener("click",()=>{
    humbuerger.classList.remove("none")
   nav_menu.classList.remove("block")
})