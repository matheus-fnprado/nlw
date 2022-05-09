window.addEventListener("scroll", onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackHome()
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add("scroll")
    }else{
        navigation.classList.remove("scroll")
    }
}

function showBackHome(){
    if(scrollY > 500){
        topo.classList.add("show")
    }else{
        topo.classList.remove("show")
    }
}

function openMenu(){
    document.body.classList.add("menu-expanded")
}

function closeMenu(){
    document.body.classList.remove("menu-expanded")
}-

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about content`)