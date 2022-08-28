let header = document.getElementById('header')
let naviHeader = document.getElementById('navi_header')
let content = document.getElementById('content')
let showSidebar = false

function toogleSidebar() {
    showSidebar = !showSidebar 
    console.log(showSidebar)
    if (showSidebar) {
       naviHeader.style.marginLeft = '-10vw' //true.
       naviHeader.style.animationName = 'showSidebar' //animation CSS.
       content.style.filter = 'blur(2px)'
    } else {
        naviHeader.style.marginLeft = '-100vw'//false.
        naviHeader.style.animationName = '' //animation CSS.
        content.style.filter = '' 
    }
}

function closeSideBar() {
    if(showSidebar) {
        toogleSidebar() //if open, close
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar == true) {
        toogleSidebar()
    }
}) //bug fix
